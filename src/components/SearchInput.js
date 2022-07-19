import React from "react";
import { Input, Text } from "@chakra-ui/react";

const SearchInput = ({ handleSearch }) => {
  return (
    <>
      <Text
        fontSize="24px"
        fontWeight="400"
        margin= "63px 0 0 36px"
      >
        Search
      </Text>
      <Input
        placeholder="Search..."
        onChange={handleSearch}
        padding="1rem"
        width="95%"
        margin="0 auto"
        marginBottom="4rem"
        display="flex"
      />
    </>
  );
};

export default SearchInput;

