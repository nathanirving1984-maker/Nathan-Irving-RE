files = ["buying-selling.html", "contact.html"]
old = "https://formsubmit.co/nathan.irving@cbrealty.com"
new = "https://formsubmit.co/nathanirving1984@gmail.com"

for path in files:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    count = content.count(old)
    if count == 0:
        print(f"{path}: no occurrences found, skipped")
        continue
    content = content.replace(old, new)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"{path}: updated {count} occurrence(s)")

print("Done.")
