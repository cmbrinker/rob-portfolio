import { Heading, List, ListItem } from "@chakra-ui/react";
import Accordion from "../layout/Accordion";

const CoursesTaught = () => {
  return (
    <Accordion heading="Courses Taught">
      <Heading as="h3" size="lg">
        Myers Park High School
      </Heading>
      <List display="flex" flexWrap="wrap">
        <ListItem width="33%">
          Fundamentals of English I (Inclusion Class)
        </ListItem>
        <ListItem width="33%">English I</ListItem>
        <ListItem width="33%"> English III</ListItem>
        <ListItem width="33%">Honors English III</ListItem>
        <ListItem width="33%">English IV</ListItem>
        <ListItem width="33%">Honors English IV</ListItem>
        <ListItem width="33%">Speech and Debate I</ListItem>
        <ListItem width="33%">12th PLC Lead</ListItem>
      </List>
    </Accordion>
  );
};

export default CoursesTaught;
