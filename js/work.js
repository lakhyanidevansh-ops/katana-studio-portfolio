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
const repeatedVideos = (filenames, thumbnails = []) => {
  const videos = filenames.map((filename, index) => ({
    url: katanaVideo(filename),
    thumbnail: thumbnails[index]
      ? `assets/thumbnails/${encodeURIComponent(thumbnails[index])}`
      : ""
  }));
  return [...videos, ...videos.map((video) => ({ ...video }))];
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
      ], [
        "matinoz TVC.jpg",
        "BehaveNeu Brand video.jpg",
        "BNI Brand shoot.jpg"
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
      ], [
        "Marketing Content 01.jpg",
        "Marketing Content 02.jpg",
        "Marketing Content 03.jpg",
        "Marketing Content 04.jpg",
        "Marketing Content 05.jpg",
        "Marketing Content 06.jpg",
        "Marketing Content 07.jpg"
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
      ], ["Edit 01.jpg", "Edit 02.jpg", "Edit 03.jpg", "Edit 04.jpg"])
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
      ], [
        "Craftroots 01.jpg",
        "Craftroots 02.jpg",
        "Craftroots 03.jpg",
        "Craftroots 04.jpg",
        "Pantaloons diwali.jpg"
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
      ], [
        "Atish reel .jpg",
        "Blues.jpg",
        "Mota bhai 01.jpg",
        "Mota bhai 02.jpg",
        "Mystic the wiz.jpg"
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
      ], [
        "DPA 01.jpg",
        "DPA 03.jpg",
        "DPA 02.jpg",
        "DPA 04.jpg",
        "DPA 05.jpg"
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
      ], [
        "BizKonnet 01.jpg",
        "Book piblishing.jpg",
        "TOPS 01.jpg",
        "Ahmedabad Mirror 01.jpg",
        "Ahmedabad Mirror 02.jpg",
        "Doctor skincare.jpg",
        "TOPS 02.jpg",
        "TOPS 03.jpg",
        "TOPS 04.jpg"
      ])
    }
  ]
};

