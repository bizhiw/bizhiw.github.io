# Neecha & Alborz — Wedding Website (plain HTML)

A simple, hand-editable wedding website. **No build step, no Node, no npm.**
Just HTML, CSS and a tiny bit of JavaScript. You edit the files and upload them.

## The files

| File | What it is |
| --- | --- |
| `index.html` | Home (silver-mirror hero, Our Story, Wedding preview, Registry) |
| `wedding.html` | The Wedding page (schedule engraved on the silver tray + details) |
| `travel.html` | Travel (venue over the Heintzman House photo, hotels, airports) |
| `faq.html` | FAQ |
| `rsvp.html` | RSVP — embeds your Google Form |
| `styles.css` | All the styling (colours & fonts at the very top) |
| `script.js` | The countdown and the fade-in animation |
| `404.html` | Friendly "page not found" |
| `robots.txt`, `.nojekyll` | Search settings / GitHub Pages helper |
| `mirror-web.webp` | The silver mirror (home hero) |
| `background-web.jpg` | The silk backdrop |
| `tray-web.webp` | The silver serving tray (schedule) |
| `heintzman-web.webp` | Heintzman House photo (Travel page) |
| `footer-web.webp` | The photo behind the footer |

**Upload ALL of these together** — the five image files are part of the design.

## How to open it on your computer

Double-click **`index.html`** — it opens in your web browser. That’s the whole site.
(The countdown and animations may look slightly different opened this way than
when it’s live online, but the content is all there.)

## How to change the wording

Open any `.html` file in a plain text editor (or right in GitHub, see below) and
type over the words. Look for comments like `<!-- EDIT: ... -->` — they point at
the things you’ll most likely want to change.

- **Names, date, city, welcome message** → top of `index.html`.
- **Schedule / venue / dress code / directions** → `wedding.html`.
- **Hotels, airports, transport** → `travel.html`.
- **FAQ** → `faq.html`. Each question is a `<details>…</details>` block; copy one
  to add a question, or delete one to remove it.
- **Registry links** → bottom of `index.html`.
- **Your contact email** → search every file for `hello@neechaandalborz.com` and
  replace it (it’s in the footer of each page).
- **Colours & fonts** → the `:root { … }` block at the top of `styles.css`.
- **Photos** → replace the `src="https://images.unsplash.com/..."` links with your
  own image links, **or** put an image file next to these pages and use
  `src="my-photo.jpg"`.

> A few facts (the date, the city, your email) appear on more than one page. If
> you change one of those, update it on each page. Search-and-replace makes this
> quick.

## The RSVP form

`rsvp.html` embeds your Google Form. Responses go to the form’s **Responses** tab
in Google — that’s where you’ll see who’s coming and can download a spreadsheet.

- Make sure the form **accepts responses** and isn’t limited to your organization
  (Google Form → Settings → Responses).
- To swap in a different form later, replace the two Google links in `rsvp.html`
  (the `iframe` `src` and the "Open it in a new tab" link).

## Put it online with GitHub Pages (no npm, no build)

1. Create a free account at **github.com** and make a new repository.
2. On the repo page: **Add file → Upload files**, and drag in *all* the files in
   this folder (including `styles.css`, `script.js`, `.nojekyll` and the images if
   you added any). Commit.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to
   **“Deploy from a branch,”** pick your branch (usually `main`) and the **`/root`**
   folder, and Save.
4. Wait a minute, then reload — GitHub shows your live web address at the top of
   the Pages settings. Done.

To make a change later, edit a file on github.com (click it, then the pencil ✏️)
and commit — the live site updates in about a minute.

Any other static host works too (Netlify, Cloudflare Pages) — you can even drag
this folder onto Netlify Drop (app.netlify.com/drop) and it’s instantly live.

## Keeping it private from Google

Every page includes `<meta name="robots" content="noindex, nofollow">` and
`robots.txt` blocks search engines, so the site won’t show up in Google while you
build. When you’re ready to be found, delete that `<meta>` line from each page and
change `robots.txt` to:

```
User-agent: *
Allow: /
```

## Custom domain (optional)

In your repo, add a file named `CNAME` (no extension) containing just your domain
(e.g. `neechaandalborz.com`), then set the domain in Settings → Pages.
