import { Grid2, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navItems = [
    { id: "home", name: "Home" },
    { id: "about-me", name: "About me" },
    { id: "resume", name: "Resume" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Grid2
        container
        sx={{
          py: 2,
          px: { xs: 5, md: 16, lg: 20 },
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          zIndex: 1000,
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Grid2 size={{ xs: 3, sm: 3, md: 4, lg: 6 }}>
          <Typography
            sx={{
              fontFamily: '"Fira Code", monospace',
              fontSize: { xs: "20px", md: "28px" },
              letterSpacing: "2px",
            }}
          >
            manbac13
          </Typography>
        </Grid2>
        <Grid2
          display={"flex"}
          justifyContent={"flex-end"}
          size={{ xs: 9, sm: 9, md: 8, lg: 6 }}
        >
          <Stack
            direction={"row"}
            spacing={3}
            sx={{ display: { xs: "none", sm: "none", md: "inherit" } }}
          >
            {navItems.map((item, index) => (
              <Typography
                sx={{
                  fontWeight: activeSection === item.id ? 700 : 500,
                  fontSize: "16px",
                  cursor: "pointer",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: activeSection === item.id ? "100%" : 0,
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.4s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
                onClick={() => {
                  document.getElementById(item.id).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                key={index}
              >
                {item.name}
              </Typography>
            ))}
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};
export default NavBar;
