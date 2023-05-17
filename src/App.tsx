import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ImagesSection from "./component/imagesSection/ImagesSection";
import DescriptionSection from "./component/descriptionSection/DescriptionSection";
import { data } from "./utility/data";
import ImageCarousel from "./component/imageCarousel/ImageCarousel";

interface SelectedObject {
  image: string;
  title: string;
  description: string;
  id: number;
}

function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [selected, setSelected] = useState<SelectedObject>(
    data[isMobile ? 1 : 2]
  );
  const [autoPlay, setAutoPlay] = useState(false);

  const handleSelect = (id: number) => {
    setSelected(data[id]);
  };
  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  return (
    <Container maxWidth="xl">
      <Box paddingTop="3rem" paddingX="0">
        <Grid container spacing={2} paddingX="0">
          <Grid item xs={12} sm={6} md={8}>
            <ImagesSection selected={selected.image} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DescriptionSection
              description={selected.description}
              title={selected.title}
            />
          </Grid>
        </Grid>

        <Grid
          bgcolor="white"
          position="sticky"
          bottom={0}
          container
          spacing={2}
          sx={{ padding: "2rem 0px 0rem 0px!important" }}
        >
          <Grid item xs={12} sm={6} md={8} sx={{ padding: "0px!important" }}>
            <ImageCarousel
              selected={selected.id}
              handleSelect={handleSelect}
              autoPlay={autoPlay}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ paddingBottom: { xs: ".5rem", sm: "0rem" } }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              padding="0!important"
            >
              <Button
                onClick={handleAutoPlay}
                className="playPauseButton"
                sx={{
                  marginTop: { xs: "1rem", sm: "0" },
                  height: { xs: "3.5rem", sm: "5.5rem" },
                  width: { xs: "1rem", sm: "5.5rem" },
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  padding="0px"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2.5rem" },
                  }}
                >
                  {autoPlay ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i className="fa-solid fa-play"></i>
                  )}
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
