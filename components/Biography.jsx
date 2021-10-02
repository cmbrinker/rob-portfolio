import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";

const Biography = () => {
  return (
    <Flex>
      <Heading
        as="h2"
        p="0 10px"
        textAlign="center"
        bgColor="rgb(240, 165, 0)"
        color="white"
        fontFamily="yaldevi"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {`B I O G R A P H Y`}
      </Heading>

      <Flex
        direction="column"
        justifyContent="space-around"
        lineHeight="2em"
        fontSize="1em"
        p="200px 10%"
      >
        <Text>
          Originally from Cincinnati, Ohio, I have a B.A. in literature from
          Otterbein University and an M.A. in literature from Portland State
          University in Portland, Oregon. My teaching career began back in 2009
          at Columbus State Community College, and I have been at Myers Park
          High School since 2016. Additionally, since 2011, I teach online two
          courses at Franklin University as well as act as a Faculty Observer
          for Franklin University’s College Credit Plus partners. As of Fall
          2021, I will be teaching online courses at the Center for Talented
          Youth at Johns Hopkins University.
        </Text>
        <Text>
          My academic interests include critical theory, literature as
          propaganda (especially Orwell and Steinbeck), and composition.
          Starting this fall, I will also be teaching courses at the Center for
          Talented Youth at Johns Hopkins University. At Myers Park, I normally
          teach English IV and Speech and Debate I, and serve as the 12th Grade
          PLC Leader, though I have taught other levels as well. I also serve as
          the Congressional Debate coach for the Myers Park High School Speech
          and Debate Team.
        </Text>
      </Flex>
      <Image
        src="images/rob-solo.jpg"
        alt="Rob outside his classroom"
        m={4}
        h="100%"
        w="400px"
        objectFit="contain"
      />
    </Flex>
  );
};

export default Biography;
