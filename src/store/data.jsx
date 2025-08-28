import htmlIcon from "/html.png";
import expressIcon from "/express.png";
import nextIcon from "/next.png";
import javascriptIcon from "/javascript.png";
import tailwindIcon from "/tailwind.png";
import typescriptIcon from "/typescript.png";
import reactIcon from "/react.png";
import seaImg from "/project-img.png";
import mindForgeImg from "/project-2-img.png";
import basicFrontEnd from "/basic-front-end.jpg";
import basicJs from "/basic-js.jpg";
import frontEndCert from "/front-end-certificate.png";
import jsIntermediate from "/js-intermediate-certificate.jpg";
import jsCert from "/javascript-certificate.jpeg";
import responsiveWebCert from "/responsive-web-certificate.jpeg";

export const skills = [
  {
    name: "HTML",
    icon: htmlIcon,
    description:
      "Semantic markup and modern web standards for accessible, clean websites",
    level: "Expert",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    description:
      "Utility-first CSS framework for rapid, responsive design systems",
    level: "Advanced",
    category: "Styling",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    description:
      "ES6+ and modern JavaScript development with focus on performance",
    level: "Intermediate",
    category: "Programming",
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    description:
      "Superset of modern JavaScript development with focus on performance and type-checker",
    level: "Intermediate",
    category: "Programming",
  },

  {
    name: "React",
    icon: reactIcon,
    description:
      "Component-based UI development with hooks and modern patterns",
    level: "Intermediate",
    category: "Framework",
  },
  {
    name: "Next.js",
    icon: nextIcon,
    description: "Full-stack React framework for production-ready applications",
    level: "Intermediate",
    category: "Framework",
  },
  {
    name: "Express.js",
    icon: expressIcon,
    description: "Backend API development with Node.js and RESTful services",
    level: "Basic",
    category: "Backend",
  },
];

export const projects = [
  {
    githubLink: "https://github.com/hadienzz/compfest",
    urlLink: "#",
    title: "SEA Catering",
    description:
      "SEA Catering adalah platform pemesanan makanan sehat yang dibuat untuk seleksi akhir kompetisi Compfest yang diselenggarakan oleh Universitas Indonesia. Website ini memiliki fitur tambah, cancel, dan pause menu, serta admin dashboard untuk mengelola layanan catering dengan mudah.",
    techStack: [
      { name: "React.Js", bg: "bg-blue-600" },
      { name: "TailwindCSS", bg: "bg-blue-400" },
      { name: "Supabase", bg: "bg-green-800" },
    ],
    image: seaImg,
  },
  {
    githubLink: "https://github.com/mind-forgee",
    urlLink: "https://mind-forge-fe.vercel.app/",
    title: "Mind Forgee",
    description:
      "Mind Forgee adalah platform pembelajaran tentang IT yang digenerate oleh AI. Dibuat untuk Penugasan Akademi Compfest yang diselenggarakan oleh Universitas Indonesia. Website ini memiliki fitur pilih roadmap, mark pembelajaran terakhir, serta admin dashboard untuk mengelola manajemen dengan mudah.",
    techStack: [
      { name: "React.Js", bg: "bg-blue-600" },
      { name: "TalwindCSS", bg: "bg-blue-400" },
      { name: "Gemini API", bg: "bg-linear-to-r from-[#4b90ff] to-[#ff5546]" },
      { name: "Express.Js", bg: "" },
      { name: "Supabase", bg: "bg-green-800" },
    ],
    image: mindForgeImg,
  },
];

export const certifications = [
  {
    image: basicFrontEnd,
    by: "Dicoding",
    id: 1,
    description:
      "• Belajar Membuat Front End Untuk Pemula\n• Materi: HTML, CSS, JavaScript dasar\n• Fokus: membangun web responsif & interaktif\n• Bukti kesiapan untuk level lebih lanjut",
  },
  {
    image: basicJs,
    by: "Dicoding",
    id: 2,
    description:
      "• Belajar Dasar Pemrograman JavaScript\n• Materi: sintaks, variabel, function dasar\n• Fokus: fondasi sebelum masuk framework",
  },
  {
    image: frontEndCert,
    by: "HackerRank",
    id: 3,
    description:
      "• Front-End Development Certificate\n• Materi: HTML, CSS, JavaScript\n• Fokus: membangun UI & praktik modern web dev",
  },
  {
    image: jsIntermediate,
    by: "HackerRank",
    id: 4,
    description:
      "• JavaScript Intermediate Certificate\n• Materi: higher-order function, array methods, async programming\n• Fokus: problem solving dengan JavaScript",
  },
  {
    image: jsCert,
    by: "FreeCodeCamp",
    id: 5,
    description:
      "• JavaScript Algorithms & Data Structures\n• Materi: algoritma dasar, struktur data, logika pemrograman\n• Fokus: efisiensi & praktik menulis kode",
  },
  {
    image: responsiveWebCert,
    by: "FreeCodeCamp",
    id: 6,
    description:
      "• Responsive Web Design Certificate\n• Materi: Flexbox, CSS Grid, prinsip desain responsif\n• Fokus: website adaptif di berbagai perangkat",
  },
];
