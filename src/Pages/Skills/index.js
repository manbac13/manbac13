import {
  Chip,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const languages = ["CSS", "HTML", "Javascript (ES2015+)"];
const frameWorks = [
  "React",
  "Node.js",
  "Express.js",
  "Material UI",
  "Tailwaing CSS",
  "Styled Components",
];
const tools = ["Git", "Github", "Netlify", "Vercel"];

const Skills = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Stack
        id="skills"
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
            sx={{ fontSize: "36px", fontWeight: "600", mt: 6 }}
            data-aos="fade-up"
          >
            Skills
          </Typography>
        </Stack>

        <Grid2
          container
          display={"flex"}
          justifyContent={"center"}
          data-aos="fade-up"
          spacing={{ xs: 3, sm: 3, md: 0 }}
        >
          <Grid2 size={{ xs: 12, sm: 12, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "14px", md: "16px" },
              }}
              textAlign={"center"}
            >
              Programming Languages
            </Typography>
            <Stack
              spacing={2}
              mt={{ xs: 1, sm: 1, md: 2 }}
              direction={{ xs: "row", sm: "row", md: "column" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {languages.map((item, index) => (
                <Chip
                  label={item}
                  color="warning"
                  variant="outlined"
                  sx={{ fontSize: "12px" }}
                  size={isSmallScreen ? "small" : "medium"}
                />
              ))}
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 3 }}>
            <Typography
              sx={{ fontWeight: 600, fontSize: { xs: "14px", md: "16px" } }}
              textAlign={"center"}
            >
              Libraries & Frameworks
            </Typography>
            <Stack
              spacing={2}
              mt={{ xs: 1, sm: 1, md: 2 }}
              direction={{ xs: "row", sm: "row", md: "column" }}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                flexWrap: "wrap", // Allow items to wrap to the next line
                overflow: "hidden", // Prevent content overflow
                padding: 1, // Add padding to avoid chips touching edges
                gap: 1, // Add spacing between chips
              }}
            >
              {frameWorks.map((item, index) => (
                <Chip
                  label={item}
                  color="primary"
                  variant="outlined"
                  sx={{ fontSize: "12px" }}
                  size={isSmallScreen ? "small" : "medium"}
                />
              ))}
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 3 }}>
            <Typography
              sx={{ fontWeight: 600, fontSize: { xs: "14px", md: "16px" } }}
              textAlign={"center"}
            >
              Tools & Platforms
            </Typography>
            <Stack
              spacing={2}
              mt={{ xs: 1, sm: 1, md: 2 }}
              direction={{ xs: "row", sm: "row", md: "column" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {tools.map((item, index) => (
                <Chip
                  label={item}
                  color="error"
                  variant="outlined"
                  sx={{ fontSize: "12px" }}
                  size={isSmallScreen ? "small" : "medium"}
                />
              ))}
            </Stack>
          </Grid2>
        </Grid2>
      </Stack>
    </>
  );
};

export default Skills;
