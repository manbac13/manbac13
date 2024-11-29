import {
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Maincard from "Components/Maincard";
import ProjectDialog from "Components/ProjectDialog";
import { useState } from "react";
import { projectData } from "Utils";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [dialogState, setDialogState] = useState(false);
  const [dataToDialog, setDataToDialog] = useState({});

  const handleClose = () => {
    setDialogState(false);
  };
  return (
    <>
      <Stack
        id="projects"
        sx={{
          px: 3,
          py: 6,
          mt: 6,
          height: "calc(100vh - 74px)",
        }}
        spacing={6}
      >
        <Stack direction={"row"} justifyContent={"center"}>
          <Typography
            sx={{ fontSize: { xs: "32px", md: "36px" }, fontWeight: "600" }}
            data-aos="fade-up"
          >
            Projects
          </Typography>
        </Stack>

        <Grid2
          container
          display={"flex"}
          justifyContent={"center"}
          data-aos="fade-up"
          spacing={{ xs: 3, sm: 3, md: 2 }}
        >
          {projectData.map((item, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 12, md: 3 }}>
              <Maincard
                onClick={() => {
                  setDialogState(true);
                  setDataToDialog(item);
                }}
                sx={{
                  py: { xs: 1, md: 2 },
                  px: 1,
                  cursor: "pointer",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease 0.1s",
                  boxShadow:
                    "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                  borderRadius: "16px",
                  borderBottom: "4px solid transparent",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderBottom: `4px solid ${theme.palette.primary.main}`,
                  },
                  "&:hover .project-title": {
                    color: theme.palette.primary.main, // Change text color on hover
                  },
                }}
              >
                <Stack
                  spacing={2}
                  direction={{ xs: "row", sm: "row", md: "column" }}
                  alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
                >
                  {item.icon}
                  <Stack spacing={1}>
                    <Typography
                      className="project-title"
                      sx={{
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        fontWeight: "500",
                        transition: "color 0.3s ease 0.1s",
                      }}
                    >
                      {item.project_name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        color: theme.palette.grey[700],
                      }}
                    >
                      {item.card_desc}
                    </Typography>
                  </Stack>
                </Stack>
              </Maincard>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
      <ProjectDialog
        open={dialogState}
        handleClose={handleClose}
        data={dataToDialog}
      />
    </>
  );
};

export default Projects;
