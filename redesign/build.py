"""Build redesign drafts.
src/*.html are page fragments (title, style, body). This writes:
  - redesign/preview/<name>.html  fragment with absolute links, for artifact previews
  - home-<name>.html (repo root)  full standalone page for the redesign branch
"""
import json, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
R = os.path.join(ROOT, 'redesign')
m = json.load(open(os.path.join(R, 'novato-map.json')))
os.makedirs(os.path.join(R, 'preview'), exist_ok=True)
for f in sorted(os.listdir(os.path.join(R, 'src'))):
    name = f[:-5]
    src = open(os.path.join(R, 'src', f)).read()
    for z, d in m['paths'].items():
        src = src.replace('{{MAP_%s}}' % z, d)
    prev = src.replace('{{SITE}}', 'https://nathan-irving.com/').replace('{{HOME}}', 'https://nathan-irving.com/')
    open(os.path.join(R, 'preview', f), 'w').write(prev)
    site = src.replace('{{SITE}}', '').replace('{{HOME}}', 'index.html')
    head_end = site.index('<style>')
    page = ('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">\n'
            '<meta name="robots" content="noindex">\n'
            '<link rel="icon" type="image/x-icon" href="favicon.ico">\n'
            + site[:head_end] + site[head_end:site.index('</style>') + 8]
            + '\n</head>\n<body>\n' + site[site.index('</style>') + 8:] + '\n</body>\n</html>\n')
    open(os.path.join(ROOT, 'home-%s.html' % name), 'w').write(page)
    print('built', name)
