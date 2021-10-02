import { Flex, Box, Heading, Image, List, ListItem } from "@chakra-ui/react";

const SampleSyllabi = () => {
  return (
    <Flex wrap="wrap">
      <Box w="50%" p={4}>
        <Heading as="h3" size="lg" fontFamily="slab">
          High School
        </Heading>
        <List>
          <ListItem>Honors English 12</ListItem>
          <ListItem>Speech and Debate</ListItem>
        </List>
      </Box>
      <Box w="50%" p={4}>
        <Heading as="h3" size="lg" fontFamily="slab">
          University and Community College
        </Heading>
        <List>
          <ListItem>Exploring Business Identities (ENG 220)</ListItem>
          <ListItem>Composition I (ENG 1100)</ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default SampleSyllabi;
