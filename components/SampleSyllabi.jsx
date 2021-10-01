import { Flex, Box, Heading, Image, List, ListItem } from "@chakra-ui/react";

const SampleSyllabi = () => {
  return (
    <Flex
      ml={["2%", "2%", "2%", "10%"]}
      mr={["2%", "2%", "2%", "10%"]}
      mt="2em"
      mb="2em"
    >
      <Image
        w={["20%", "20%", "20%", "40%"]}
        src="backgrounds/library.jpg"
        alt="classroom"
        objectFit="cover"
      />
      <Box w={["80%", "80%", "80%", "60%"]}>
        <Heading
          as="h2"
          fontFamily="slab"
          textAlign="center"
          color="white"
          p={2}
          ml={[2, 4, 6, 8]}
          bgColor="#C2B9B0"
        >
          Courses Taught / Sample Syllabus
        </Heading>
        <Flex
          p="2em"
          fontFamily="abel"
          textAlign="center"
          justifyContent="center"
          direction="column"
        >
          <Box m="1em 0">
            <Heading
              as="h3"
              m={2}
              fontFamily="abel"
              fontWeight="light"
              color="grey"
              display="inline-block"
            >
              High School
            </Heading>
            <List spacing="1em" mt="10px">
              <ListItem>Honors English 12</ListItem>
              <ListItem>Speech and Debate</ListItem>
            </List>
          </Box>
          <Box m="1em 0">
            <Heading
              as="h3"
              ml={[2, 4, 6, 8]}
              fontFamily="abel"
              fontWeight="light"
              color="grey"
              display="inline-block"
            >
              University and Community College
            </Heading>
            <List spacing="1.3em" mt="10px">
              <ListItem>Exploring Business Identities (ENG 220)</ListItem>
              <ListItem>Composition I (ENG 1100)</ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SampleSyllabi;
