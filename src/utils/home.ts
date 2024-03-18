import movieImage from "../assets/images/project-movie.png";
import jadwali from "../assets/images/project-jadwali.png";
import rideshare from "../assets/images/project-rideshare.png";
import ibi from "../assets/images/project-ibi.png";
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
    name: "Movie Project",
    description:
      "Discover & explore movies/TVs with advanced search, filtering, ratings, trailers, and detailed cast info. Your ultimate cinema guide.",
    image: movieImage,
    demoUrl: "https://watchmovienow.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  {
    id: 2,
    name: "Jadwali | Event Scheduling",
    description:
      "Streamline your meetings and events with Jadwali’s webview scheduling. Ideal for virtual meet-ups, akin to Zoom & Google Meet integrations.",
    image: jadwali,
    demoUrl:
      "https://jadwali-webview.netlify.app/free-schedule/khan-khan-z19/testing-my-word-e39",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  {
    id: 3,
    name: "Ride Share",
    description:
      "A ride-sharing platform connecting drivers and passengers in real-time, inspired by Uber's seamless experience. Features intuitive booking and tracking.",
    image: rideshare,
    demoUrl: "https://rideshare-admin.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  {
    id: 4,
    name: "I Can Bring It",
    description:
      "Effortlessly schedule and manage events with 'I Can Bring It'. Our platform streamlines event coordination, perfect for any gathering.",
    image: ibi,
    demoUrl: "https://i-can-bring-it.netlify.app/",
    codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  },
  // {
  //   id: 5,
  //   name: "Project Five",
  //   description:
  //     "This is a brief description of Project Five, focusing on its innovative solutions and tech stack.",
  //   image: movieImage,
  //   demoUrl: "https://watchmovienow.netlify.app/",
  //   codeUrl: "https://github.com/Naveedahmedtech/movie-app",
  // },
];

export const skills = [
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
