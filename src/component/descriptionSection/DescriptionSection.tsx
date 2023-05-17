import React from "react";
import { Box, Typography } from "@mui/material";
interface DescriptionSectionProps {
  description: string;
  title: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  title,
  description,
}) => {
  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          paddingBottom: {
            xs: ".6rem",
            sm: "4rem",
          },
          fontSize: {
            xs: "2rem",
            sm: "3rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default DescriptionSection;
