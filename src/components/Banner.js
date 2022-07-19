import { Box, Text } from "@chakra-ui/react";
import backgroundImage from "../assets/images/banner-img.jpg";

const Banner = () => {
  return (
    <Box
        backgroundImage={backgroundImage}
        height= "550px"
        padding= "109px 0"
    >
        <Text
            color="white" 
            fontSize="72px"
            fontWeight="700"
            width="490px"
            marginLeft="77px"
            lineHeight= "93.74px"
        >
            Watch something incredible.
        </Text>
    </Box>
  )
}

export default Banner;