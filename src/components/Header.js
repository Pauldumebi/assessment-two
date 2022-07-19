import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box 
    display= "flex"
    width= "1440px"
    height= "140px"
    backgroundColor= "#292929"
    color="#fff"
    >
        <Text
            border= "1px solid #fff"
            padding= "30px 92.5px"
            textAlign="center"
            margin= "auto 0"
            marginLeft= "77px"
        >MyTestApp</Text>
    </Box>
  )
}

export default Header;