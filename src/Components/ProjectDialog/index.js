import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  DialogContent,
  IconButton,
  Fade,
  Grid2,
  useTheme,
  alpha,
} from "@mui/material";
import { Add } from "iconsax-react";

const ProjectDialog = ({ open, handleClose, data }) => {
  const theme = useTheme();
  const techChips = {
    border: `1px solid ${theme.palette.primary.dark}`,
    backgroundColor: alpha(theme.palette.primary.light, 0.1),
    color: theme.palette.primary.dark,
    px: 1,
    py: 0.5,
    borderRadius: "8px",
  };
  return (
    <>
      <Dialog
        TransitionComponent={Fade}
        transitionDuration={500}
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {data.project_name}
            <IconButton onClick={handleClose}>
              <Add style={{ rotate: "45deg" }} />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers sx={{ py: 5, px: { xs: 4, md: 10 } }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <Stack spacing={1}>
                <Typography
                  color="primary.dark"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {data.subtitle}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xs: "24px", sm: "24px", md: "40px" },
                    lineHeight: "0.8",
                  }}
                >
                  {data.project_name}
                </Typography>
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "18px", md: "24px" },
                  }}
                >
                  Project Overview
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "14px", md: "16px" } }}
                  textAlign={"justify"}
                >
                  {data.overview}
                </Typography>
              </Stack>
            </Grid2>

            <Grid2 size={12} my={2}>
              <img
                style={{ border: "4px solid #ccc", borderRadius: "12px" }}
                width={"100%"}
                src={data.image}
                alt="project_image"
              />
            </Grid2>
            <Grid2 size={12}>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "18px", md: "24px" },
                  }}
                >
                  Technologies used
                </Typography>
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    overflow: "hidden",
                  }}
                >
                  {data.tech_used?.map((item, index) => (
                    <Stack sx={techChips} key={index}>
                      <Typography sx={{ fontSize: "12px" }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid2>
            <Grid2 size={12}>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "18px", md: "24px" },
                  textDecoration: "none", // Remove default underline
                  color: "primary.main", // Set the color to match your theme
                  "&:hover": {
                    textDecoration: "underline", // Add underline on hover
                  },
                }}
                component={"a"}
                href={data.github}
                target="_blanck"
              >
                View Github Url
              </Typography>
            </Grid2>
            <Grid2 size={12}>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "18px", md: "24px" },
                  textDecoration: "none", // Remove default underline
                  color: "primary.main", // Set the color to match your theme
                  "&:hover": {
                    textDecoration: "underline", // Add underline on hover
                  },
                }}
                component={"a"}
                href={data.live}
                target="_blanck"
              >
                View Live Url
              </Typography>
            </Grid2>
          </Grid2>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectDialog;
