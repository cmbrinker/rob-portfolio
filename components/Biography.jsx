import { Box, Text, Image } from "@chakra-ui/react";
import Accordion from "../layout/Accordion";

const Biography = () => {
  return (
    <Accordion heading="Biography">
      <Image
        src="images/rob-placard.jpg"
        alt="Rob outside his classroom"
        boxSize="250px"
        mr={2}
        mb={2}
        float="left"
        borderRadius="5px"
        border="silver solid 3px"
      />

      <Text>
        Originally from Cincinnati, Ohio, I have a B.A. in literature from
        Otterbein University and an M.A. in literature from Portland State
        University in Portland, Oregon. My teaching career began back in 2009 at
        Columbus State Community College, and I have been at Myers Park High
        School since 2016. Additionally, since 2011, I teach online two courses
        at Franklin University as well as act as a Faculty Observer for Franklin
        University’s College Credit Plus partners. As of Fall 2021, I will be
        teaching online courses at the Center for Talented Youth at Johns
        Hopkins University.
      </Text>
      <Text>
        My academic interests include critical theory, literature as propaganda
        (especially Orwell and Steinbeck), and composition. Starting this fall,
        I will also be teaching courses at the Center for Talented Youth at
        Johns Hopkins University. At Myers Park, I normally teach English IV and
        Speech and Debate I, and serve as the 12th Grade PLC Leader, though I
        have taught other levels as well. I also serve as the Congressional
        Debate coach for the Myers Park High School Speech and Debate Team.
      </Text>
    </Accordion>
  );
};

export default Biography;
