/*
  KATANA STUDIOS — PORTFOLIO VIDEO ASSETS
  Video files are hosted as GitHub Release assets.
*/
const KATANA_VIDEO_ASSETS = "https://github.com/lakhyanidevansh-ops/katana-studios/releases/download/katana-portfolio-videos-v1/";
const katanaVideo = (filename) => {
  const releaseFilename = filename
    .trim()
    .replace(/[()]/g, "")
    .replace(/\s+/g, ".")
    .replace(/\.{2,}/g, ".");

  return KATANA_VIDEO_ASSETS + encodeURIComponent(releaseFilename);
};
const repeatedVideos = (filenames) => {
  const videos = filenames.map(katanaVideo);
  return [...videos, ...videos];
};

window.KATANA_WORK = {
  email: "hello@yourdomain.com",
  categories: [
    {
      id: "ads",
      title: "Ads",
      cardName: "Campaign",
      hue: 17,
      links: repeatedVideos([
        "Video-72566.mp4",
        "vidssave.com Behaveneu AD 1080P.mp4",
        "vidssave.com BNI commercial 720P.mp4"
      ])
    },
    {
      id: "content",
      title: "Content",
      cardName: "Creator",
      hue: 29,
      links: repeatedVideos([
        "Video-13962.mp4",
        "Video-20696.mp4",
        "Video-21781.mp4",
        "Video-32570.mp4",
        "Video-56054.mp4",
        "Video-61774.mp4",
        "Video-95748.mp4"
      ])
    },
    {
      id: "edits",
      title: "Edits",
      cardName: "Edit",
      hue: 17,
      links: repeatedVideos([
        "f r sample.mp4",
        "Halucinated Vinyl Crown Promo Work.mp4",
        "portfo3.mp4",
        "profecialnal edit.mp4"
      ])
    },
    {
      id: "fashion",
      title: "Fashion",
      cardName: "Fashion",
      hue: 17,
      links: repeatedVideos([
        "Video-22081.mp4",
        "Video-255.mp4",
        "Video-63388.mp4",
        "Video-78819.mp4",
        "Video-97752.mp4"
      ])
    },
    {
      id: "music-video-reels",
      title: "Music Video Reels",
      cardName: "Music Reel",
      hue: 17,
      links: repeatedVideos([
        "Video-13163.mp4",
        "Video-50818.mp4",
        "Video-71735.mp4",
        "Video-91448.mp4",
        "Video-93650.mp4",
        "Video-94622.mp4"
      ])
    },
    {
      id: "real-estate",
      title: "Real Estate",
      cardName: "Property",
      hue: 17,
      links: repeatedVideos([
        "DPA 1.mp4",
        "DPA 3.mp4",
        "Serenity_Casa_10-05-25.2.mp4",
        "the garden video 1 28-5-2025.mp4",
        "the garden video 7-6-2025.mp4"
      ])
    },
    {
      id: "ugc",
      title: "UGC",
      cardName: "UGC",
      hue: 14,
      links: repeatedVideos([
        "2-7-26 Tech Hub Video.mp4",
        "7-7-26 Editing Creative Video.mp4",
        "A07.mp4",
        "Ahmedabad mirror  (1).mp4",
        "Ahmedabad mirror .mp4",
        "Doctor_skincare.mp4",
        "Graphic Designing Pooja Final.mp4",
        "Jigar Thakkar Final Video.mp4",
        "UGC Sample (1).mp4"
      ])
    }
  ]
};

