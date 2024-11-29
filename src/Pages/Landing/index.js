import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <Stack
        id="home"
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          height: "calc(100vh - 74px)",
        }}
      >
        <Stack
          spacing={1}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          data-aos="fade-up"
        >
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "48px", lg: "64px" },
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            I am Manish Bachhav
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "36px" },
              fontWeight: "600",
            }}
          >
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Frontend Developer",
                "Freelancer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
              backDelay={2000}
            />
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Landing;
