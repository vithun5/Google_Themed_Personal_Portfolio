import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { calculateExperience } from "../helpers/getExperience";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export const accountDetails = {
  account: "Google Account",
  name: "Vithun Shankar",
  gmail: "rvithun99@gmail.com",
};

export const navBar = [
  {
    name: "About",
    path: "/",
    icon: AiOutlineSearch,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: BiPencil,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiPhoneCall,
  },
  {
    name: "Map",
    path: "/map",
    icon: MdOutlineLocationOn,
  },
];

export const footerData = {
  name: "VithunShankar",
  year: new Date().getFullYear(),
  darkTheme: "Dark theme: ",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/vithun-shankar-484031179/",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/vithun5",
      icon: FaGithub,
    },
    {
      href: "https://www.instagram.com/vithun_jr/",
      icon: FaInstagram,
    },
    {
      href: "https://twitter.com/vithun_shankar_",
      icon: FaTwitterSquare,
    },
  ],
};

export const info = {
  heading: "Vithun Shankar: Software Engineer",
  mobileHeading: "Vithun Shankar",
  description:
    "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
  workExperience: "Work Experience",
  designation: "Software Engineer",
  company: "LTIMindtree Private Limited",
  timePeriod: "10/2021 - Present",
  workProjects: [
    {
      title: "P&G PAMPERS US DEVOPS  : ",
      description:
        "Developing a web application for US Pampers Diaper stash as a frontend developer and Implementation of new features, Reusable components, and Bug fixes, Worked with mentioned Technologies  : <b>React Js</b>, <b>Next Js</b>, <b>Tailwind CSS</b>, <b>Mobx</b>, <b>React-Hooks</b>,<b> Contentful</b>, <b>Azure Devops</b>, <b>Git</b>.",
    },
    {
      title: "P&G PAMPERS US DEVOPS(Admin panel)  :",
      description:
        "Developing a Admin panel for US Pampers Diaper stash from scratch as a frontend developer and Responsible for the logical part of frontend development such as API integration, Worked with mentioned technologies : <b>React Js</b>, <b>Next Js</b>, <b>Tailwind CSS</b>, <b>React-Hooks</b>, <b>Git</b>, <b>Tailwind TABS</b>. ",
    },
  ],
};

export const accordionData = [
  {
    question: "What skills does Vithun have?",
    answer: `Vithun is well-versed in Javascript, React Js, Redux, CSS 3, HTML 5, Tailwind, Next Js, Node Js, MaterialUI, Postman, Express Js, MongoDb.`,
  },
  {
    question: "What services does Vithun provide?",
    answer: `Vithun provides fully responsive frontend applications with React Js, Full-stack applications with MERN and Backend services with Node Js.`,
  },
  {
    question: "Is Vithun frontend or backend developer?",
    answer: `Vithun is a full stack web developer, Experienced in developing full stack MERN applications.`,
  },
  {
    question: "How much experience does Vithun have?",
    answer: `Vithun has ${calculateExperience()} of experience in software industry.`,
  },
];

export const relatedSearch = [
  {
    text: "Vithun's Skills",
    href: "/skills",
  },
  {
    text: "Vithun's Projects",
    href: "/projects",
  },
  {
    text: "Vithun's Location",
    href: "/location",
  },
  {
    text: "Contact Vithun",
    href: "/contact",
  },
];

export const skillsData = {
  info: "Vithun loves to develop innovative web apps using new technologies, He is keen to gain experience, enhance and upgrade his skills, He enjoys building everything from small sites and landing pages to rich interactive web apps. He loves creating visually stunning, unique and responsive web apps.",
  skills: [
    {
      title: "Frontend Skills",
      description:
        "JavaScript, React Js, Redux, React Native, Next Js, Html5, CSS3,Tailwind Css, Material Ui, Bootstrap5, Sass and Styled Component.",
    },
    {
      title: "Backend Skills",
      description:
        " Node Js, Express Js, Mongo Db, Next Js, Postman and Jwt-Authorization.",
    },
  ],
  skillsIcon: [
    {
      title: "React Js",
      href: "https://reactjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },
    {
      title: "Redux",
      href: "https://redux.js.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      shadowColor: "#9B59B6",
    },
    {
      title: "Css 3",
      href: "https://www.w3schools.com/css/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      shadowColor: "#3b82f6",
    },
    {
      title: "Next Js",
      href: "https://nextjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "React Native",
      href: "https://reactnative.dev/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Html 5",
      href: "https://www.w3.org/html/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      shadowColor: "#f97316",
    },
    {
      title: "Tailwind Css",
      href: "https://tailwindcss.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      shadowColor: "#38bdf8",
    },
    {
      title: "Material Ui",
      href: "https://mui.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      shadowColor: "#1C7FB6",
    },
    {
      title: "Bootstrap 5",
      href: "https://getbootstrap.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      shadowColor: "#7C12F8",
    },
    {
      title: "Sass",
      href: "https://sass-lang.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      shadowColor: "#CB6699",
    },
    {
      title: "Node Js",
      href: "https://nodejs.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      shadowColor: "#83CD29",
    },
    {
      title: "Express Js",
      href: "https://expressjs.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "Mongo Db",
      href: "https://www.mongodb.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      shadowColor: "#75BB69",
    },
    {
      title: "Git",
      href: "https://git-scm.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      shadowColor: "#F34F29",
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      shadowColor: "#007ACC",
    },
    {
      title: "Styled Components",
      href: "https://styled-components.com/",
      src: "/assets/styledComponents.png",
      shadowColor: "#CB6699",
    },
    {
      title: "Postman",
      href: "https://www.postman.com/",
      src: "/assets/postman.png",
      shadowColor: "#f97316",
    },
  ],
};

export const ProjectData = [
  {
    title: "Social media clone Application ",
    image: "/assets/Socialclone.PNG",
    description: [
      "Designed and developed a Social Media Clone that can be used by users",
      "The User can login to his/her account using their credentials",
      "The User can like, unlike and view the comments of the post and they can upload their own post as well",
      "User can also change between light mode and dark mode",
      "Technology used: <b>React JS</b>, <b>Node Js</b>, <b>Express Js</b>, <b>MongoDB</b>, <b>React-router</b>,  <b>Material UI</b>, <b>Redux</b>, <b>redux-persist</b>  ",
    ],

    link: "https://github.com/vithun5/PostIT-social-media-clone-",
  },
  {
    title: "Blogging Application",
    image: "/assets/Blogger.PNG",
    description: [
      "Designed and developed a simple Blog posting application.",
      "The user can add a blog and edit it.",
      "Technologies/Tools used : <b>React Js</b>, <b>Redux</b> , <b>Express js</b>, <b>Html</b> ,<b> Css</b> ",
    ],

    link: "https://github.com/vithun5/Blogger",
  },
  {
    title: "Pharmacy Store",
    image: "/assets/pharmacy-store.png",
    description: [
      "It is a Full stack Pharmacy Store application till payment using stripe.",
      "Technology used: <b>React JS</b>, <b>Node Js</b>, <b>Express Js</b>, <b>MongoDB</b>, <b>React-router</b>,  <b>Material UI</b>, <b>Redux</b>, <b>redux-persist</b>,<b>Stripe</b>  ",
    ],

    link: "https://github.com/vithun5/Pharmacy-Store",
  },
  {
    title: "Github Finder",
    image: "/assets/githubFinder.PNG",
    description: [
      "It is a simple Github user finder where user can search for Github profile and view it .",
    ],
    link: "https://github.com/vithun5/Github-finder-using-Reactjs",
  },
];

export const ContactDetails = {
  BasicDetails: [
    { title: "Mobile", icon: MdCall, src: "7010400714", href: " " },
    { title: "Email", icon: GrMail, src: "rvithun99@gmail.com", href: "" },

    {
      title: "Address",
      icon: MdLocationOn,
      src: "Chennai,Tamil Nadu",
      href: "",
    },
    {
      title: "LinkedIn",
      icon: FaLinkedin,
      src: "Contact Through LinkedIn",
      href: "https://www.linkedin.com/in/vithun-shankar-484031179/",
    },
  ],
};

export const contactData = {
  nameLabel: "Name *",
  emailLabel: "Email *",
  subjectLabel: "Subject *",
  messageLabel: "Message *",
  sendButton: "Send Message",
  errorMessage:
    "Your message could not be sent, Kindly contact directly over Email or Phone!",
  successMessage:
    "Your message has been sent successfully, I will contact you soon!",
};

export const sideBarInfo = {
  info: "Motivated MERN Stack Developer with a passion for crafting user-friendly and responsive web applications.Proficient in JavaScript, React Js, Css 3 & Frameworks, Node Js, Express Js and MongoDB. Skilled in developing clean and maintainable code, ensuring high performance and scalability. ",
  OtherDetails: [
    {
      icon: GrMail,
      title: "rvithun99@gmail.com",
    },
    { icon: BsFillPhoneFill, title: "7010400714" },
    {
      icon: FaLinkedin,
      title: "LinkedIn Profile",
      src: "https://www.linkedin.com/in/vithun-shankar-484031179/",
    },
    {
      icon: AiFillGithub,
      title: "GitHub Profile",
      src: "https://github.com/vithun5",
    },
    {
      title: "Google Portfolio Link",
      icon: AiFillGoogleCircle,
      src: "https://google-themed-personal-portfolio-vithun5.vercel.app/",
    },
    {
      icon: AiFillTwitterCircle,
      title: "Twitter Profile",
      src: "https://twitter.com/vithun_shankar_",
    },
  ],
};
