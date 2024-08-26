import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import healthcare from '../assets/healthcare.jpg';
import financelogo from '../assets/finance_logo.png';
import educationlogo from '../assets/education-logo.png';
import sustainablelogo from '../assets/sustainable-logo.jpg';
import aimllogo from '../assets/aimllogo.png';
export const navigation = [
  {
    id: "0",
    title: "THEMES AND TRACKS",
    url: "#features",
  },
  {
    id: "1",
    title: "SPONSORS",
    url: "#pricing",
  },
  {
    id: "2",
    title: "MENTORS AND JUDGES",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "CONTACT US",
    url: "#contact",
  },
  {
    id: "4",
    title: "REGISTER",
    url: "https://devfolio.co",
    onlyMobile: true,
  },
];
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "OPEN INNOVATION"
  },
  {
    id: "1",
    title: "1,00,000 + PRIZE POOL",

  },
  {
    id: "2",
    title: "GOODIES AND SWAGS FOR EVERYONE AT OFFLINE ROUND",

  },
  {
    id: "3",
    title: "10,000 + CASH PRIZES",

  },
  {
    id: "4",
    title: "FREE FOOD AND BEVERAGES AT OFFLINE ROUND",

  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "SILVER",
    description: "Powered By",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "GOLD",
    description: "Our Title Sponsors",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Bronze",
    description: "Powered By",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Open Innovation",
    text: "Unleash your creativity on any topic or technology that ignites your passion. This track embraces diverse tech stacks, encouraging groundbreaking solutions across all domains.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Health Tech",
    text: "Revolutionize healthcare through innovative technologies. From AI-driven diagnostics to wearable devices, create solutions that enhance patient care and medical efficiency.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: healthcare,
    light: true,
  },
  {
    id: "2",
    title: "Fin Tech",
    text: "Shape the future of finance with cutting-edge technology. Develop solutions for digital payments, blockchain applications, or AI-powered financial advisors to transform the financial landscape.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: financelogo,
  },
  {
    id: "3",
    title: "Ed Tech",
    text: "Redefine learning experiences through innovative educational technologies. Create platforms, apps, or tools that make education more accessible, engaging, and effective for learners of all ages.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: educationlogo,
    light: true,
  },
  {
    id: "4",
    title: "Sustainability",
    text: "Tackle global environmental challenges with tech-driven solutions. Develop innovations in renewable energy, waste reduction, or sustainable agriculture to create a greener, more sustainable future.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: sustainablelogo,
  },
  {
    id: "5",
    title: "AI/ML",
    text: "Harness the power of Artificial Intelligence and Machine Learning to solve complex problems. Create intelligent systems that can learn, adapt, and revolutionize industries across the board.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: aimllogo,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
