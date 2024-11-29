import { Grid2, Stack, Typography, useTheme } from "@mui/material";
import AboutMeData from "Components/AboutMeData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const AboutMe = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <Stack
        id="about-me"
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          px: 3,
          py: 6,
          height: "calc(100vh - 74px)",
          backgroundColor: theme.palette.grey[200],
        }}
        spacing={6}
        data-aos="fade-up"
      >
        <Stack direction={"row"} justifyContent={"center"}>
          <Typography
            sx={{ fontSize: { xs: "32px", md: "36px" }, fontWeight: "600" }}
            data-aos="fade-up"
          >
            About Me
          </Typography>
        </Stack>
        <Grid2
          container
          display={"flex"}
          justifyContent={"center"}
          data-aos="fade-up"
        >
          <Grid2 size={{ xs: 12, lg: 8 }}>
            <AboutMeData />
          </Grid2>
        </Grid2>
      </Stack>
    </>
  );
};

export default AboutMe;
