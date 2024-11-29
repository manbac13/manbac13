import { Airdrop, ChartCircle, Courthouse } from "iconsax-react";
import AirPulse from "Assets/air_pulse_img.jpg";
import Momentum from "Assets/momentum_image.jpg";
import Democratic_India from "Assets/democratic_india_img.jpg";

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
];
