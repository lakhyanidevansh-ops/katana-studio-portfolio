# Video link guide

Edit `js/work.js`. Each item passed to `videoEntries(...)` creates exactly one card. The site does not repeat videos.

## Ads

Ads has six unique videos: the first three use the GitHub Release, and the next three use the new Drive links. Their thumbnail order matches `THUMBNAIL-GUIDE.md`.

```js
links: videoEntries([
  "Video-72566.mp4",
  "vidssave.com Behaveneu AD 1080P.mp4",
  "vidssave.com BNI commercial 720P.mp4",
  "https://drive.google.com/file/d/1ZIGL33HgNs2xMyVgl5y2LT3bODFfSfzb/view?usp=sharing",
  "https://drive.google.com/file/d/14K_KHn9d3o6UK56b9FHqSeJl4-y2pbrM/view?usp=sharing",
  "https://drive.google.com/file/d/1eb6B2A8JyYuml7bvK9TJ160ejVrU4W9c/view?usp=sharing"
], [
  "matinoz TVC.jpg",
  "BehaveNeu Brand video.jpg",
  "BNI Brand shoot.jpg",
  "Grew Solar Brand film.jpg.jpeg",
  "The Architecture brand podcast.jpg.jpeg",
  "SANMACH Machinery product film.jpg.jpeg"
])
```

The first three names must match video assets in the GitHub Release. For a Drive video, replace the full URL in the matching position. Keep the thumbnail at the same index so its cover stays with that video.

## Other sections

Each section also uses `videoEntries(...)`: one source URL or filename equals one card. The number of cards is the number of entries in that section. To add or remove a video, update its source and thumbnail at the same position.

## Drive sharing

In Google Drive, open **Share** and set general access to **Anyone with the link — Viewer**. Then paste the copied file link into `js/work.js`. The site opens Drive's preview player; playback depends on Drive access and the video's format.

You can also use a YouTube share URL. For a directly hosted `.mp4`, `.webm`, or `.ogg`, paste its full video URL.


