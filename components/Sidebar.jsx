import { Flex, Heading, Divider, List, ListItem } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Flex
      w="20%"
      h="100vh"
      p="15px"
      pos="fixed"
      top="0"
      left="0"
      direction="column"
      justifyContent="center"
    >
      <Heading as="h1" fontFamily="slab" fontSize="1.8em">
        Rob O'Donnell
      </Heading>
      <Divider m="20px 0" />
      <List fontFamily="abel" fontSize="1.2em" spacing="1.5em">
        <ListItem className="nav-item">Experience</ListItem>
        <ListItem className="nav-item">Education</ListItem>
        <ListItem className="nav-item">Awards</ListItem>
        <ListItem className="nav-item">Publications</ListItem>
        <ListItem className="nav-item">Philosophy</ListItem>
        <ListItem className="nav-item">Courses</ListItem>
        <ListItem className="nav-item">Syllabus</ListItem>
        <ListItem className="nav-item">Approach</ListItem>
      </List>
    </Flex>
  );
};

export default Sidebar;
