import { Box, Flex, Heading, Image, List, ListItem } from "@chakra-ui/react";

const PedagogicalApproach = () => {
  return (
    <Flex
      ml={["2%", "2%", "2%", "10%"]}
      mr={["2%", "2%", "2%", "10%"]}
      mt="2em"
      mb="2em"
    >
      <Box w={["80%", "80%", "80%", "60%"]}>
        <Heading
          as="h2"
          fontFamily="slab"
          textAlign="center"
          color="white"
          p={2}
          mr={[2, 4, 6, 8]}
          bgColor="#C2B9B0"
        >
          Pedagogical Approach / Sample Lesson Plans & Assignments
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
              <ListItem>
                Inclusion 9th Grade English - Colormaking and Active Reading
              </ListItem>
              <ListItem>
                Standard 12h Grade English-Hip-hop and Shakespeare
              </ListItem>
              <ListItem>
                Honors 12th Grade English - 1984 AI assignment
              </ListItem>
              <ListItem>Speech and Debate I - James Baldwin debate</ListItem>
            </List>
          </Box>
          <Box m="1em 0">
            <Heading
              m={2}
              as="h3"
              fontFamily="abel"
              fontWeight="light"
              color="grey"
              display="inline-block"
            >
              University and Community College
            </Heading>
            <List spacing="1.3em" mt="10px">
              <ListItem>Developmental Education - 041 Journal 4</ListItem>
              <ListItem>Composition I - Essay 4</ListItem>
              <ListItem>
                College Writing I - Exploring Topics Through Annotated
                References
              </ListItem>
              <ListItem>
                Exploring Business Identities - Perspectives Paper
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
      <Image
        w={["20%", "20%", "20%", "40%"]}
        src="backgrounds/classroom.jpg"
        alt="classroom"
        objectFit="cover"
      />
    </Flex>
  );
};

export default PedagogicalApproach;
