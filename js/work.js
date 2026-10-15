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

window.KATANA_WORK = {
  email: "hello@yourdomain.com",
  categories: [
    {
      id: "elite",
      title: "Elite",
      cardName: "Film",
      hue: 17,
      links: [
        katanaVideo("Video-72566.mp4"),
        katanaVideo("vidssave.com Behaveneu AD 1080P.mp4"),
        katanaVideo("vidssave.com BNI commercial 720P.mp4"),
        katanaVideo("f r sample.mp4"),
        katanaVideo("Halucinated Vinyl Crown Promo Work.mp4"),
        katanaVideo("portfo3.mp4"),
        katanaVideo("profecialnal edit.mp4"),
        katanaVideo("Video-22081.mp4"),
        katanaVideo("Video-255.mp4"),
        katanaVideo("Video-63388.mp4"),
        katanaVideo("Video-78819.mp4"),
        katanaVideo("Video-97752.mp4"),
        katanaVideo("Video-13163.mp4"),
        katanaVideo("Video-50818.mp4"),
        katanaVideo("Video-71735.mp4"),
        katanaVideo("Video-91448.mp4"),
        katanaVideo("Video-93650.mp4"),
        katanaVideo("Video-94622.mp4"),
        katanaVideo("DPA 1.mp4"),
        katanaVideo("DPA 3.mp4"),
        katanaVideo("Serenity_Casa_10-05-25.2.mp4"),
        katanaVideo("the garden video 1 28-5-2025.mp4"),
        katanaVideo("the garden video 7-6-2025.mp4")
      ]
    },
    {
      id: "content-creator",
      title: "Content Creator",
      cardName: "Creator",
      hue: 29,
      links: [
        katanaVideo("Video-13962.mp4"),
        katanaVideo("Video-20696.mp4"),
        katanaVideo("Video-21781.mp4"),
        katanaVideo("Video-32570.mp4"),
        katanaVideo("Video-56054.mp4"),
        katanaVideo("Video-61774.mp4"),
        katanaVideo("Video-95748.mp4")
      ]
    },
    {
      id: "ugc",
      title: "UGC",
      cardName: "Creator",
      hue: 14,
      links: [
        katanaVideo("2-7-26 Tech Hub Video.mp4"),
        katanaVideo("7-7-26 Editing Creative Video.mp4"),
        katanaVideo("A07.mp4"),
        katanaVideo("Ahmedabad mirror  (1).mp4"),
        katanaVideo("Ahmedabad mirror .mp4"),
        katanaVideo("Doctor_skincare.mp4"),
        katanaVideo("Graphic Designing Pooja Final.mp4"),
        katanaVideo("Jigar Thakkar Final Video.mp4"),
        katanaVideo("UGC Sample (1).mp4")
      ]
    }
  ]
};

