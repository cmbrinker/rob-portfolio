import { Box, Flex, Heading, List, ListItem, Link } from "@chakra-ui/react";

const PedagogicalApproach = () => {
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
            Inclusion 9th Grade English - Colormaking and Active Reading
          </ListItem>
          <ListItem>
            Standard 12th Grade English - Hip-hop and Shakespeare
          </ListItem>
          <ListItem>Honors 12th Grade English - 1984 AI Assignment</ListItem>
          <ListItem>Speech and Debate I - James Baldwin Debate</ListItem>
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
          <ListItem>Developmental Education - 041 Journal 4</ListItem>
          <ListItem>Composition I - Essay 4</ListItem>
          <ListItem>
            <Link href="approach/exploring-topics-through-annotated-references.pdf">
              College Writing I - Exploring Topics Through Annotated References
            </Link>
          </ListItem>
          <ListItem>
            Exploring Business Identities - Perspectives Paper
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default PedagogicalApproach;
