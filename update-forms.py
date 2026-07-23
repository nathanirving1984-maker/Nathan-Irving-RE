import re

replacements = [
    {
        "file": "buying-selling.html",
        "old": '<form action="https://formspree.io/f/YOUR_BUYER_FORM_ID" method="POST" class="form-grid">',
        "new": (
            '<form action="https://formsubmit.co/nathan.irving@cbrealty.com" method="POST" class="form-grid">\n'
            '          <input type="hidden" name="_subject" value="New Buyer Inquiry - Nathan Irving RE">\n'
            '          <input type="hidden" name="_template" value="table">\n'
            '          <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">'
        ),
        "label": "Buyer intake form",
    },
    {
        "file": "buying-selling.html",
        "old": '<form action="https://formspree.io/f/YOUR_SELLER_FORM_ID" method="POST" class="form-grid">',
        "new": (
            '<form action="https://formsubmit.co/nathan.irving@cbrealty.com" method="POST" class="form-grid">\n'
            '          <input type="hidden" name="_subject" value="New Seller Inquiry - Nathan Irving RE">\n'
            '          <input type="hidden" name="_template" value="table">\n'
            '          <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">'
        ),
        "label": "Seller intake form",
    },
    {
        "file": "contact.html",
        "old": '<form action="https://formspree.io/f/YOUR_CONTACT_FORM_ID" method="POST" class="form-grid">',
        "new": (
            '<form action="https://formsubmit.co/nathan.irving@cbrealty.com" method="POST" class="form-grid">\n'
            '          <input type="hidden" name="_subject" value="New Contact Message - Nathan Irving RE">\n'
            '          <input type="hidden" name="_template" value="table">\n'
            '          <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">'
        ),
        "label": "Contact form",
    },
]

for item in replacements:
    path = item["file"]
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    if item["old"] not in content:
        if "formsubmit.co" in content and item["label"].lower().split()[0].lower() in content.lower():
            print(f"{item['label']}: already appears to be updated, skipped")
        else:
            print(f"{item['label']}: pattern NOT found in {path} - no change made")
        continue

    content = content.replace(item["old"], item["new"])
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"{item['label']}: updated in {path}")

print("Done.")