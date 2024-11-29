import {
  Divider,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EducationTimeline from "Components/Timeline/educational";
import ProfressionalTimeline from "Components/Timeline/profressional";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Resume = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        id="resume"
        sx={{
          px: 3,
          py: 6,
          mt: 6,
        }}
        spacing={6}
      >
        <Stack direction={"row"} justifyContent={"center"}>
          <Typography
            data-aos="fade-up"
            sx={{ fontSize: { xs: "32px", md: "36px" }, fontWeight: "600" }}
          >
            My Resume
          </Typography>
        </Stack>
        <Grid2
          container
          display={"flex"}
          justifyContent={"center"}
          spacing={{ xs: 2, sm: 3, md: 5 }}
        >
          <Grid2
            size={{ xs: 8, sm: 6, lg: 4 }}
            display={"flex"}
            justifyContent={"flex-end"}
            data-aos="fade-up"
          >
            <EducationTimeline />
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 0.5 }} data-aos="fade-up">
            {isSmallScreen && (
              <Divider sx={{ fontSize: "12px", color: theme.palette.divider }}>
                Profressional Experience
              </Divider>
            )}
          </Grid2>
          <Grid2 data-aos="fade-up" size={{ xs: 8, sm: 6, lg: 4 }}>
            <ProfressionalTimeline />
          </Grid2>
        </Grid2>
      </Stack>
    </>
  );
};

export default Resume;
