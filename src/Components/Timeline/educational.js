import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, useTheme } from "@mui/material";
import { Setting2, Teacher } from "iconsax-react";

const EducationTimeline = () => {
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
            <TimelineDot color="primary" variant="outlined">
              <Teacher />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" } }} variant="h6" component="span">
              Full Stack Developer
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
            >
              10X Academy, &nbsp; May - Nov 2022
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
              color={theme.palette.grey[700]}
              textAlign={"justify"}
            >
              I realized machines don’t argue back, but debugging code gives me
              the thrill of solving a mystery every day.{" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <Setting2 />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" } }} variant="h6" component="span">
              Bachelor of Engineering
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
            >
              Sinhgad Institute of Technology
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", lg: "16px" } }}
              color={theme.palette.grey[700]}
              textAlign={"justify"}
            >
              Coding lets me break things without a wrench!
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default EducationTimeline;
