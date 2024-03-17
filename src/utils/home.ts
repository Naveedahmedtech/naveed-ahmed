import movieImage from "../assets/images/project-movie.png";
import {
  faMobileAlt,
  faCloud,
  faCodeBranch,
  faSitemap,
  faProjectDiagram,
  faCheckCircle,
  faTools,
  faUsersCog,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";


// Example projects data
export const projects = [
  {
    id: 1,
    name: "Project One",
    description:
      "This is a brief description of Project One, highlighting its main features and technologies used.",
    image: movieImage,
    demoUrl: "https://watchmovienow.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  {
    id: 2,
    name: "Project Two",
    description:
      "This is a brief description of Project Two, focusing on its innovative solutions and tech stack.",
    image: movieImage,
    demoUrl: "https://watchmovienow.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  {
    id: 3,
    name: "Project Three",
    description:
      "This is a brief description of Project Three, focusing on its innovative solutions and tech stack.",
    image: movieImage,
    demoUrl: "https://watchmovienow.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  {
    id: 4,
    name: "Project Four",
    description:
      "This is a brief description of Project four, focusing on its innovative solutions and tech stack.",
    image: movieImage,
    demoUrl: "https://watchmovienow.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  {
    id: 5,
    name: "Project Five",
    description:
      "This is a brief description of Project Five, focusing on its innovative solutions and tech stack.",
    image: movieImage,
    demoUrl: "https://watchmovienow.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
];



export     const skills = [
  {
    name: "Full Stack Development (MERN)",
    level: "Expert",
    icon: faSitemap,
    color: "#4D96FF",
  },
  {
    name: "Responsive Web Design",
    level: "Advanced",
    icon: faMobileAlt,
    color: "#FFCA28",
  },
  {
    name: "API Development & Integration",
    level: "Expert",
    icon: faCloud,
    color: "#F44336",
  },
  {
    name: "State Management (Redux/Context API)",
    level: "Advanced",
    icon: faProjectDiagram,
    color: "#9C27B0",
  },
  {
    name: "Agile Methodologies & Scrum",
    level: "Expert",
    icon: faUsersCog,
    color: "#4CAF50",
  },
  { name: "CI/CD", level: "Intermediate", icon: faTools, color: "#FF9800" },
  {
    name: "Testing (Unit/Integration/E2E)",
    level: "Intermediate",
    icon: faCheckCircle,
    color: "#00BCD4",
  },
  {
    name: "Version Control (Git/GitHub)",
    level: "Expert",
    icon: faCodeBranch,
    color: "#673AB7",
  },
  {
    name: "Cloud Services (AWS/Firebase)",
    level: "Intermediate",
    icon: faCloud,
    color: "#03A9F4",
  },
  {
    name: "UI/UX Design Principles",
    level: "Advanced",
    icon: faPaintBrush,
    color: "#E91E63",
  },
];
