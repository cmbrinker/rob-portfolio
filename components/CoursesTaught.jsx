import { Flex, Box, Heading, List, ListItem } from "@chakra-ui/react";

const CoursesTaught = () => {
  return (
    <Flex wrap="wrap" fontFamily="lora">
      <Box w={["100%", "100%", "50%", "50%"]} p={[0, 0, 2, 4]} mt={4}>
        <Heading
          as="h3"
          mb={4}
          size="md"
          fontWeight="semibold"
          fontFamily="lora"
        >
          Myers Park High School
        </Heading>
        <List fontSize="">
          <ListItem>Fundamentals of English I (Inclusion Class)</ListItem>
          <ListItem>English I</ListItem>
          <ListItem> English III</ListItem>
          <ListItem>Honors English III</ListItem>
          <ListItem>English IV</ListItem>
          <ListItem>Honors English IV</ListItem>
          <ListItem>Speech and Debate I</ListItem>
          <ListItem>12th PLC Lead</ListItem>
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
          Columbus State Community College
        </Heading>
        <List fontSize="md">
          <ListItem>Advanced Reading</ListItem>
          <ListItem>Basic Communication Skills</ListItem>
          <ListItem>Basic Puncation Skills</ListItem>
          <ListItem>College Success Skills</ListItem>
          <ListItem>Composition I</ListItem>
          <ListItem>Composition I with Workshop</ListItem>
          <ListItem>Developmental Composition</ListItem>
          <ListItem>Essay and Research</ListItem>
          <ListItem>Intermediate Reading</ListItem>
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
          Franklin University
        </Heading>
        <List fontSize="md">
          <ListItem>Basic College Writing</ListItem>
          <ListItem>Exploring Professoinal Identities</ListItem>
          <ListItem>
            Business and Technical Writing (online and traditional)
          </ListItem>
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
          Center for Talented Youth at Johns Hopkins University
        </Heading>
        <List fontSize="md">
          <ListItem>TBD</ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default CoursesTaught;
