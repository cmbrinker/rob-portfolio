import { Flex, Box, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justifyContent="space-between" p="10px 1em" bgColor="#84929B">
      <Box color="white" fontFamily="abel" fontSize="1.7em">
        {`Rob O'Donnell`}
      </Box>
      <HStack
        display="none"
        fontFamily="abel"
        fontSize="1.2em"
        spacing="15px"
        alignItems="end"
        _hover={{ cursor: "pointer" }}
      >
        <Box>Philosophy</Box>
        <Box>Courses</Box>
        <Box>Approach</Box>
        <Box>Certifications</Box>
        <Box>Awards</Box>
      </HStack>
    </Flex>
  );
};

export default Header;
