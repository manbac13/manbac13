import { Airdrop, ChartCircle, Courthouse, Map, Video } from "iconsax-react";
import AirPulse from "Assets/air_pulse_img.jpg";
import Momentum from "Assets/momentum_image.jpg";
import Democratic_India from "Assets/democratic_india_img.jpg";
import Loom from "Assets/loom_image.jpg";
import Trails from "Assets/trails_image.jpg";

export const projectData = [
  {
    project_name: "Air Pulse",
    subtitle: "Weather App",
    tech_used: ["React", "Material UI", "Openweather Api", "Redux", "Recharts"],
    card_desc: "Enter a location and get current weather and air quality.",
    description: "",
    overview:
      "Air Pulse provides users with up-to-date weather information for any city they search. Users can view the current weather conditions, including temperature, humidity, and wind speed, along with the Air Quality Index (AQI) to understand the environmental quality.",
    icon: <Airdrop size="32" color="#0073e6" />,
    image: AirPulse,
    github: "https://github.com/manbac13/air_pulse",
    live: "https://airpulse.vercel.app/",
  },
  {
    project_name: "Democratic India",
    subtitle: "Dashborad App",
    tech_used: [
      "React",
      "Node.js",
      "Express.js",
      "Material UI",
      "Redux",
      "Recharts",
    ],
    description: "",
    card_desc: "Get to know Indian Democracy in a better way.",
    overview:
      "The Democratic India App is an informative platform that offers comprehensive data about the Indian Parliament and its Members of Parliament (MPs). Users can explore detailed information about MPs, their constituencies, and their political affiliations. The app features dynamic dashboards with interactive charts that showcase the state-wise distribution of parliamentary seats, demographic insights, and population statistics.",
    icon: <Courthouse size="32" color="#0073e6" />,
    image: Democratic_India,
    github: "https://github.com/manbac13/democratic_india_frontend",
    live: "https://democraticindia.vercel.app/",
  },
  {
    project_name: "Momentum",
    subtitle: "Drag & Drop Application",
    tech_used: ["React", "Material UI", "Ant D", "Redux", "Recharts"],
    card_desc: "Gather momentum by completing daily targets on time.",
    description: "",
    overview:
      "The Momentum App is a productivity tool designed for seamless task management through an intuitive drag-and-drop interface. Users can create, edit, and delete tasks, organizing them into customizable states or categories. With its smooth drag-and-drop functionality, users can easily transfer tasks across different states, such as To Do, In Progress, and Completed.",
    icon: <ChartCircle size="32" color="#0073e6" />,
    image: Momentum,
    github: "https://github.com/manbac13/momentum",
    live: "https://momentum-theta.vercel.app/",
  },
  {
    project_name: "Loom",
    subtitle: "A movie exploration app with seamless search and details.",
    tech_used: [
      "React",
      "Axios",
      "Redux Toolkit",
      "React Router",
      "Material UI",
    ],
    card_desc: "Discover movies, cast details, and more with ease.",
    description: "",
    overview:
      "Loom is an engaging movie exploration application powered by the TMDB API. It enables users to search for movies, view detailed information about their cast, and organize their cinematic discoveries. The app features a sleek and responsive interface designed with Material UI, efficient state management through Redux Toolkit, and robust API integration using Axios for a seamless user experience.",
    icon: <Video size="32" color="#0073e6" />,
    image: Loom,
    github: "https://github.com/manbac13/loom",
    live: "https://loom-six.vercel.app/",
  },
  {
    project_name: "Trails",
    subtitle: "An interactive map showcasing UNESCO World Heritage sites.",
    tech_used: ["React", "React-Leaflet", "Material UI"],
    card_desc: "Discover UNESCO World Heritage sites.",
    description: "",
    overview:
      "Trails is an interactive mapping application that highlights UNESCO World Heritage sites worldwide. Built with React-Leaflet for dynamic maps, users can explore locations and view detailed information about each site. The application combines Material UI for a sleek and responsive design with React for seamless rendering, offering a visually rich and informative user experience. Trails serves as a gateway to cultural exploration through technology.",
    icon: <Map size="32" color="#0073e6" />,
    image: Trails, // Replace with the appropriate variable for your image
    github: "https://github.com/manbac13/trails", // Replace with the actual GitHub link
    live: "https://trails-rouge.vercel.app/", // Replace with the actual live link
  },
];
