export const projects = [
  {
    slug: "ar-trail-hike",
    title: "AR Trail & Hike",
    description:
      "Website landing page pribadi untuk menampilkan aktivitas hiking serta trail running.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: ["/project.jpg"],
    liveUrl: "https://arhike.netlify.app/",

    overview:
      "AR Trail & Hike merupakan website landing page yang dibuat untuk menampilkan informasi mengenai aktivitas hiking dan trail running.",

    role: [
      "Merancang tampilan website dan mengembangkan frontend agar dapat responsif di berbagai perangkat.",
      "Deploy website",
      "Update & Push perubahan ke repository GitHub",
    ],

    features: [
      "Responsive design",
      "Informasi aktivitas hiking (summit)",
      "Gallery",
      "Contact section",
    ],
  },

  {
    slug: "bcic-website",
    title: "BCIC Website",
    description:
      "Website company profile dengan sistem CMS untuk pengelolaan konten.",
    technologies: ["Laravel", "PHP", "MySQL", "GitHub"],
    image: ["/project/projectbcic1.jpg", "/project/projectbcic2.jpg"],
    liveUrl: "",

    overview:
      "Website company profile dengan sistem CMS untuk membantu pengelolaan berbagai konten website.",

    role: [
      "Mengembangkan dan melakukan pemeliharaan fitur website serta CMS.",
      "Menambahkan beberapa fitur untuk menampilkan data seperti Informasi Publik (frontend)",
      "Melakukan update pada fitur CMS untuk fitur Informasi Publik",
      "Migrasi data ke dalam database",
      "Menambahkan beberapa menu pada Navbar",
      "Melakukan push update fitur yang dibuat ke repository vendor dengan Git",
    ],

    features: ["CMS", "Informasi Publik", "Tenant"],
  },
];
