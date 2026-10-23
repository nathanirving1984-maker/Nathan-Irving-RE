#!/usr/bin/env python3
"""Pull housing-market series from FRED (Federal Reserve Bank of St. Louis)
and write them to data/market.json for the Market Pulse page.

Uses FRED's public CSV download (no API key needed). If one series fails,
the previous values for it are kept so the page never goes blank.
Run by .github/workflows/market-data.yml.
"""
import csv
import io
import json
import os
import sys
import time
import urllib.request
from datetime import date, datetime, timedelta, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "data", "market.json")

# id: (title, units, frequency, source, years of history to keep)
SERIES = {
    # Mortgage rates
    "MORTGAGE30US": ("30-year fixed mortgage rate", "%", "weekly", "Freddie Mac", 3),
    "MORTGAGE15US": ("15-year fixed mortgage rate", "%", "weekly", "Freddie Mac", 3),
    # Treasuries
    "DGS5": ("5-year Treasury yield", "%", "daily", "U.S. Treasury", 2),
    "DGS10": ("10-year Treasury yield", "%", "daily", "U.S. Treasury", 3),
    "DGS30": ("30-year Treasury yield", "%", "daily", "U.S. Treasury", 2),
    # Fed policy rate
    "DFEDTARL": ("Fed funds target, lower bound", "%", "daily", "Federal Reserve", 3),
    "DFEDTARU": ("Fed funds target, upper bound", "%", "daily", "Federal Reserve", 3),
    # Inflation
    "CPIAUCSL": ("Consumer Price Index", "index", "monthly", "BLS", 3),
    "CUSR0000SAH1": ("CPI: Shelter", "index", "monthly", "BLS", 3),
    # National housing
    "EXHOSLUSM495S": ("Existing-home sales (annual rate)", "homes", "monthly", "NAR", 3),
    "HOSMEDUSM052N": ("Median existing-home price", "$", "monthly", "NAR", 3),
    "HOSINVUSM495N": ("Existing-home inventory", "homes", "monthly", "NAR", 3),
    "HOSSUPUSM673N": ("Months' supply of existing homes", "months", "monthly", "NAR", 3),
    "HOUST": ("Housing starts (annual rate, thousands)", "thousands", "monthly", "Census / HUD", 3),
    "PERMIT": ("Building permits (annual rate, thousands)", "thousands", "monthly", "Census / HUD", 3),
    # Marin County listings (Realtor.com)
    "MEDLISPRI6041": ("Marin median list price", "$", "monthly", "Realtor.com", 4),
    "ACTLISCOU6041": ("Marin active listings", "listings", "monthly", "Realtor.com", 4),
    "MEDDAYONMAR6041": ("Marin median days on market", "days", "monthly", "Realtor.com", 4),
    "NEWLISCOU6041": ("Marin new listings", "listings", "monthly", "Realtor.com", 4),
    "PRIREDCOU6041": ("Marin listings with a price cut", "listings", "monthly", "Realtor.com", 4),
}

URL = "https://fred.stlouisfed.org/graph/fredgraph.csv?id={id}&cosd={start}"


def fetch(series_id, years):
    start = (date.today() - timedelta(days=365 * years + 31)).isoformat()
    req = urllib.request.Request(
        URL.format(id=series_id, start=start),
        headers={"User-Agent": "nathan-irving.com market pulse (GitHub Actions)"},
    )
    last_err = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                text = r.read().decode("utf-8")
            break
        except Exception as e:  # network hiccup: retry a couple of times
            last_err = e
            time.sleep(3 * (attempt + 1))
    else:
        raise RuntimeError(f"{series_id}: {last_err}")

    rows = list(csv.reader(io.StringIO(text)))
    if not rows or len(rows[0]) < 2:
        raise RuntimeError(f"{series_id}: unexpected response")
    obs = []
    for row in rows[1:]:
        if len(row) < 2 or row[1] in ("", "."):
            continue
        try:
            obs.append([row[0], float(row[1])])
        except ValueError:
            continue
    if not obs:
        raise RuntimeError(f"{series_id}: no observations")
    return obs


def main():
    previous = {}
    if os.path.exists(OUT):
        try:
            with open(OUT) as f:
                previous = json.load(f).get("series", {})
        except Exception:
            previous = {}

    out = {}
    failures = []
    for sid, (title, units, freq, source, years) in SERIES.items():
        meta = {"title": title, "units": units, "frequency": freq, "source": source}
        try:
            obs = fetch(sid, years)
            out[sid] = {**meta, "obs": obs, "fetched": datetime.now(timezone.utc).isoformat(timespec="seconds")}
            print(f"ok   {sid}: {len(obs)} obs, latest {obs[-1]}")
        except Exception as e:
            failures.append(sid)
            print(f"FAIL {sid}: {e}", file=sys.stderr)
            if sid in previous:
                out[sid] = previous[sid]  # keep last good copy

    if not out:
        print("No data fetched at all; leaving existing file untouched.", file=sys.stderr)
        sys.exit(1)

    # Only bump "updated" when some observation actually changed.
    changed = any(out.get(k, {}).get("obs") != previous.get(k, {}).get("obs") for k in out) or set(out) != set(previous)
    result = {
        "updated": datetime.now(timezone.utc).isoformat(timespec="seconds") if changed else None,
        "source": "FRED, Federal Reserve Bank of St. Louis (fred.stlouisfed.org)",
        "failed": failures,
        "series": out,
    }
    if not changed and os.path.exists(OUT):
        with open(OUT) as f:
            result["updated"] = json.load(f).get("updated")

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w") as f:
        json.dump(result, f, separators=(",", ":"))
    print(f"Wrote {OUT} ({len(out)} series, {len(failures)} failed, changed={changed})")


if __name__ == "__main__":
    main()
