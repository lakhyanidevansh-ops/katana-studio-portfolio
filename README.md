# Katana Studios

A responsive, static portfolio website for Katana Studios. The minimal visual identity uses the studio's brushmark, warm ivory, sumi ink and burgundy (`#8C2D3E`). Open `index.html` in a browser; the site uses plain HTML, CSS and JavaScript and has no build step.

## Add the videos

Edit `js/work.js` and replace a URL in any numbered slot with a public YouTube or Google Drive URL. The portfolio is currently populated with the studio's links. For example:

```js
"https://youtu.be/VIDEO_ID", // Ads 01 — paste video URL
```

The seven sections are already set up with the requested card counts: Ads 6, Content 14, Edits 8, Fashion 10, Music Video Reels 12, Real Estate 10 and UGC 18. Keep the slots in order. Clicking a card opens its video in the on-page player.

For Google Drive playback, use a video file link and set access to **Anyone with the link**. The site supports YouTube watch, short and share links, plus Google Drive file links.

Replace `hello@yourdomain.com` near the top of `js/work.js` with the studio's contact email.

## Project files

- `index.html` — page structure and copy
- `css/styles.css` — design and responsive layout
- `js/work.js` — editable categories, video links and contact email
- `js/site.js` — project cards and embedded player
- `assets/katana-brushmark-transparent.png` — Katana Studios logo mark
- `assets/favicon.svg` — Katana Studios favicon in the brand palette

