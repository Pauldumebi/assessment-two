import React, { Fragment } from "react";
import { Image, Grid, GridItem } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import no_img from "./images/no_image.jpg";

const ImageFrame = ({ title, image, movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 767 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 766, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <>
      <Fragment>
        <Carousel
          responsive={responsive}
          centerMode={true}
          autoPlay={false}
          showDots={false}
          shouldResetAutoplay={false}
          draggable={true}
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {movies?.map((movie) => {
              return (
                <GridItem w="100%">
                  <Image
                    src={movie.Poster ? `${movie.Poster}` : `${no_img}`}
                    alt={"Dan Abramov"}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Carousel>
      </Fragment>
    </>
  );
};

export default ImageFrame;
