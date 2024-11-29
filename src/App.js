import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import NavBar from "Components/Navbar";
import Landing from "Pages/Landing";
import AboutMe from "Pages/AboutMe";
import Projects from "Pages/Projects";
import Resume from "Pages/Resume";
import Skills from "Pages/Skills";
import Contact from "Pages/Contact";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Funnel Display", sans-serif',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Landing />
        <AboutMe />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
