import { Flex, Box, Heading, List, ListItem, Link } from "@chakra-ui/react";

const SampleSyllabi = () => {
  return (
    <Flex wrap="wrap">
      <Box w={["100%", "100%", "50%", "50%"]} p={[0, 0, 2, 4]} mt={4}>
        <Heading
          as="h3"
          mb={4}
          size="md"
          fontWeight="semibold"
          fontFamily="lora"
        >
          High School
        </Heading>
        <List>
          <ListItem>
            <Link href="">Honors English 12</Link>
          </ListItem>
          <ListItem>Speech and Debate</ListItem>
        </List>
      </Box>
      <Box w={["100%", "100%", "50%", "50%"]} p={[0, 0, 2, 4]} mt={4}>
        <Heading
          as="h3"
          mb={4}
          size="md"
          fontWeight="semibold"
          fontFamily="lora"
        >
          University and Community College
        </Heading>
        <List>
          <ListItem>
            <Link href="syllabi/eng-220-syllabus.pdf">
              Exploring Business Identities (ENG 220)
            </Link>
          </ListItem>
          <ListItem>
            <Link href="syllabi/composition-i-syllabus.pdf">
              Composition I (ENG 1100)
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default SampleSyllabi;
