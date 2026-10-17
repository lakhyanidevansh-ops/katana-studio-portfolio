# Thumbnail guide

Website folder: `work/katana-studios-repo`

## Where thumbnails go

Put image files in `assets/thumbnails/`. The filename in `js/work.js` must match the actual filename, including spaces, capital letters, and extension.

Each card gets its image from its `thumbnail` value, for example:

```js
thumbnail: "assets/thumbnails/Grew Solar Brand film.jpg.jpeg"
```

The text under a card uses the thumbnail filename with image extensions removed. For example, `Grew Solar Brand film.jpg.jpeg` appears as **Grew Solar Brand film**. If a card has no thumbnail, it keeps its numbered category label.

## Ads image order for six different ads

The six Ads links are listed once each. Their thumbnails go in this order:

1. Ads 01 — `matinoz TVC.jpg` (display title: **Matinoz TVC**)
2. Ads 02 — `BehaveNeu Brand video.jpg`
3. Ads 03 — `BNI Brand shoot.jpg`
4. Ads 04 — `Grew Solar Brand film.jpg.jpeg`
5. Ads 05 — `The Architecture brand podcast.jpg.jpeg`
6. Ads 06 — `SANMACH Machinery product film.jpg.jpeg`

All six images are already in `assets/thumbnails/`.

## Music Video Reel 06

Use `assets/thumbnails/Music Video Reel 06.png` for Music Video Reel 06. It is already in the thumbnails folder.

## If a thumbnail does not appear

- Check spelling and extension in `js/work.js` against the file in `assets/thumbnails/`.
- Keep the `assets/thumbnails/` prefix in the value.
- Save the file and refresh the website.


