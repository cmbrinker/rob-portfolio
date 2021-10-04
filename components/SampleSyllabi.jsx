import { Flex, Box, Heading, List, ListItem, Link } from "@chakra-ui/react";

const SampleSyllabi = () => {
  return (
    <Flex wrap="wrap">
      <Box w="50%" p={4}>
        <Heading as="h3" mb={4} size="lg" fontWeight="light" fontFamily="lora">
          High School
        </Heading>
        <List>
          <ListItem>
            <Link href="./syllabi/honors-english-iv-syllabus-2021.pdf">
              Honors English 12
            </Link>
          </ListItem>
          <ListItem>Speech and Debate</ListItem>
        </List>
      </Box>
      <Box w="50%" p={4}>
        <Heading as="h3" mb={4} size="lg" fontWeight="light" fontFamily="lora">
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
