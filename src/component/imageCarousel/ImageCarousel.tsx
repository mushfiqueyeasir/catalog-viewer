import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { data } from "../../utility/data";

interface ImageCarouselProps {
  handleSelect: (id: number) => void;
  autoPlay: boolean;
  selected: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  handleSelect,
  autoPlay,
  selected,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [preSliceIndex, setPreSliceIndex] = useState(0);
  const [postSliceIndex, setPostSliceIndex] = useState(isMobile ? 3 : 5);
  const maxLength = data.length;

  const handlePreviousImage = () => {
    const newPreSliceIndex =
      preSliceIndex === 0 ? maxLength - (isMobile ? 3 : 5) : preSliceIndex - 1;
    const newPostSliceIndex =
      postSliceIndex === (isMobile ? 3 : 5) ? maxLength : postSliceIndex - 1;
    setPreSliceIndex(newPreSliceIndex);
    setPostSliceIndex(newPostSliceIndex);
    handleSelect(newPreSliceIndex + (isMobile ? 1 : 2));
  };

  const handleNextImage = () => {
    const newPreSliceIndex =
      preSliceIndex === maxLength - (isMobile ? 3 : 5) ? 0 : preSliceIndex + 1;
    const newPostSliceIndex =
      postSliceIndex === maxLength ? (isMobile ? 3 : 5) : postSliceIndex + 1;
    setPreSliceIndex(newPreSliceIndex);
    setPostSliceIndex(newPostSliceIndex);
    handleSelect(postSliceIndex - (isMobile ? 1 : 2));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoPlay) {
        const newPreSliceIndex =
          preSliceIndex === maxLength - (isMobile ? 3 : 5)
            ? 0
            : preSliceIndex + 1;
        const newPostSliceIndex =
          postSliceIndex === maxLength
            ? isMobile
              ? 3
              : 5
            : postSliceIndex + 1;
        setPreSliceIndex(newPreSliceIndex);
        setPostSliceIndex(newPostSliceIndex);
        handleSelect(postSliceIndex - 2);
        handleSelect(postSliceIndex - (isMobile ? 1 : 2));
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingTop: {
          xs: "0rem",
          sm: "1rem",
        },
      }}
    >
      <Button onClick={handlePreviousImage}>
        <Typography
          variant="h2"
          component="h2"
          color="black"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "4rem",
            },
          }}
        >
          <i className="fa-solid fa-caret-left"></i>
        </Typography>
      </Button>
      <Card className="slider-container">
        <Box
          className="slider-images"
          sx={{
            gap: {
              xs: "2px",
              sm: "10px",
            },
          }}
        >
          {data.slice(preSliceIndex, postSliceIndex).map((item, index) => (
            <Card
              onClick={() => handleSelect(item.id)}
              className="slider-card"
              key={index}
            >
              <CardMedia
                sx={{
                  width: {
                    xs: "10rem",
                    sm: "10rem",
                  },
                  height: {
                    xs: "4rem",
                    sm: "7rem",
                  },
                }}
                component="img"
                src={item.image}
                alt={item.title}
                className={`slider-image ${
                  selected !== item.id && "grayscale"
                } `}
              />
            </Card>
          ))}
        </Box>
      </Card>
      <Button onClick={handleNextImage}>
        <Typography
          variant="h2"
          component="h2"
          color="black"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "4rem",
            },
          }}
        >
          <i className="fa-solid fa-caret-right"></i>
        </Typography>
      </Button>
    </Box>
  );
};

export default ImageCarousel;
