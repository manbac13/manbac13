import Maincard from "Components/Maincard";
import { Call, Sms } from "iconsax-react";

const { Stack, Typography, useTheme, Grid2, useMediaQuery, } = require("@mui/material");

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      id="contact"
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
          sx={{
            fontSize: { xs: "32px", md: "36px" },
            fontWeight: "600",
            mt: 6,
          }}
          data-aos="fade-up"
        >
          Contact
        </Typography>
      </Stack>

      <Grid2
        data-aos="fade-up"
        container
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid2 size={{ xs: 10, sm: 10, md: 6, lg: 7 }}>
          <Maincard
            sx={{
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
              borderRadius: "12px",
              borderBottom: `3px solid ${theme.palette.primary.main}`,
            }}
          >
            <Grid2 container spacing={{ xs: 2, sm: 2, md: 2, lg: 0 }}>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Stack
                    sx={{
                      border: `2px solid ${theme.palette.primary.dark}`,
                      p: 1,
                      borderRadius: "50%",
                    }}
                  >
                    <Call size={isSmallScreen ? '16' : 24} color={theme.palette.primary.dark} />
                  </Stack>
                  <Stack>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "14px", md: "18px" },
                      }}
                    >
                      Call Me
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                      +917507462549
                    </Typography>
                  </Stack>
                </Stack>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Stack
                    sx={{
                      border: `2px solid ${theme.palette.primary.dark}`,
                      p: 1,
                      borderRadius: "50%",
                    }}
                  >
                    <Sms size={isSmallScreen ? '16' : '24'} color={theme.palette.primary.dark} />
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontWeight: "600", fontSize: { xs: "14px", md: "18px" }, }}>
                      Email
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                      manishbachhav98@gmail.com
                    </Typography>
                  </Stack>
                </Stack>
              </Grid2>
            </Grid2>
          </Maincard>
        </Grid2>
      </Grid2>
    </Stack>
  );
};
export default Contact;
