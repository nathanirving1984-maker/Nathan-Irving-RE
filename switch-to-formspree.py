import re

forms = [
    {
        "file": "buying-selling.html",
        "subject_marker": "New Buyer Inquiry - Nathan Irving RE",
        "endpoint": "https://formspree.io/f/xkodqnvn",
        "label": "Buyer intake form",
    },
    {
        "file": "buying-selling.html",
        "subject_marker": "New Seller Inquiry - Nathan Irving RE",
        "endpoint": "https://formspree.io/f/xdaqwoll",
        "label": "Seller intake form",
    },
    {
        "file": "contact.html",
        "subject_marker": "New Contact Message - Nathan Irving RE",
        "endpoint": "https://formspree.io/f/xaqrpydp",
        "label": "Contact form",
    },
]

for item in forms:
    path = item["file"]
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Match the <form ...> opening tag (whatever URL it currently has),
    # through the FormSubmit-specific hidden fields, up to and including
    # the honeypot input -- identified uniquely by the subject marker text.
    pattern = re.compile(
        r'<form action="[^"]*" method="POST" class="form-grid">\s*'
        r'<input type="hidden" name="_subject" value="' + re.escape(item["subject_marker"]) + r'">\s*'
        r'<input type="hidden" name="_template" value="table">\s*'
        r'<input type="text" name="_honey"[^>]*>'
    )

    replacement = (
        f'<form action="{item["endpoint"]}" method="POST" class="form-grid">\n'
        f'          <input type="hidden" name="_subject" value="{item["subject_marker"]}">'
    )

    new_content, count = pattern.subn(replacement, content)
    if count == 0:
        print(f"{item['label']}: pattern NOT found in {path} - no change made")
        continue

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"{item['label']}: switched to Formspree ({item['endpoint']})")

print("Done.")