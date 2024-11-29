import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, useTheme } from "@mui/material";
import { Bag2, ChemicalGlass, Moon } from "iconsax-react";

const ProfressionalTimeline = () => {
  const theme = useTheme();
  return (
    <>
      <Timeline
        sx={{
          [`& .MuiTimelineItem-root`]: {
            width: "100%",
            "&:before": {
              flex: 0,
              padding: 0,
            },
          },
          [`& .MuiTimelineContent-root`]: {
            flex: 1,
            width: "100%",
          },
          padding: 0,
          width: "100%",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="warning" variant="outlined">
              <Bag2 />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" } }}
              variant="h6"
              component="span"
            >
              React Developer
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
            >
              Servicepack.ai, Jan 2023 - Aug 2024
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
              color={theme.palette.grey[700]}
              textAlign={"justify"}
            >
              Led the development of high-impact projects such as Experiense.ai
              and the Annotation Tool
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="warning" variant="outlined">
              <ChemicalGlass />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" } }}
              variant="h6"
              component="span"
            >
              Internship
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
            >
              10X Academy, Oct - Nov 2023
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
              color={theme.palette.grey[700]}
              textAlign={"justify"}
            >
              Worked on multiple full stack projects.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default ProfressionalTimeline;
