import { Box, Flex, Heading, Image, List, ListItem } from "@chakra-ui/react";

const PedagogicalApproach = () => {
  return (
    <Flex wrap="wrap">
      <Box w="50%" p={4}>
        <Heading as="h3" size="lg" fontFamily="slab">
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
      <Box w="50%" p={4}>
        <Heading as="h3" size="lg" fontFamily="slab">
          University and Communicty College
        </Heading>
        <List>
          <ListItem>Developmental Education = 041 Journal 4</ListItem>
          <ListItem>Composition I - Essay 4</ListItem>
          <ListItem>
            College Writing I - Exploring Topics Through Annotated References
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
