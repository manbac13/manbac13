import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const Maincard = ({
  // Custom props
  title,
  subtitle,
  mediaUrl,
  mediaHeight = 140,
  contentSpacing = 2,
  headerPadding = 2,

  // Built-in Card props
  elevation = 1,
  variant = "elevation",
  sx,
  children,

  // Optional action buttons section
  actions,

  // Rest of the MUI Card props
  ...cardProps
}) => {
  return (
    <Card
      elevation={elevation}
      variant={variant}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...cardProps}
    >
      {mediaUrl && (
        <CardMedia
          component="img"
          height={mediaHeight}
          image={mediaUrl}
          alt={title || "card media"}
        />
      )}

      {(title || subtitle) && (
        <Box sx={{ p: headerPadding }}>
          {title && (
            <Typography variant="h5" component="h2" gutterBottom={!!subtitle}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="subtitle1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      <CardContent sx={{ flex: 1, p: contentSpacing }}>{children}</CardContent>

      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default Maincard;
