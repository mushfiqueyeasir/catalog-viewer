import React from "react";
import { Box } from "@mui/material";

interface ImagesSectionProps {
  selected: string;
}

const ImagesSection: React.FC<ImagesSectionProps> = ({ selected }) => {
  return (
    <Box>
      <Box
        overflow="hidden"
        borderRadius="20px"
        sx={{
          maxWidth: "100%",
          height: {
            xs: "20rem",
            sm: "40rem",
          },
        }}
      >
        <img src={selected} alt="Description of the" className="displayImage" />
      </Box>
    </Box>
  );
};

export default ImagesSection;
