import { Box, Flex, Text, Image } from "@chakra-ui/react";

const BaldwinQuote = () => {
  return (
    <Flex
      p={[" 2em 1em", "2em 1em", "2em 5%", "2em 8%"]}
      bgColor="#393E46"
      color="white"
      fontFamily="yaldevi"
      fontSize="1.1em"
      lineHeight="2em"
      alignItems="center"
      borderTop="white solid 2px"
      direction={["column", "column", "column", "row"]}
    >
      <Image
        src="images/james-baldwin.jpg"
        alt="james baldwin"
        w={["250px", "250px", "300px", "300px"]}
        h={["250px", "250px", "300px", "300px"]}
        m={[2, 2, 2, 8]}
        boxShadow="-12px 12px 0 #00ADB5, 12px -12px 0 #00ADB5"
        border="white solid 2px"
      />
      <Box p={["1em", "1em", "2em", "2em 4em"]}>
        <Text fontSize="lg">
          {`“The purpose of education, finally, is to create in a person the
          ability to look at the world for himself, to make his own decisions,
          to say to himself this is black or this is white, to decide for
          himself whether there is a God in heaven or not. To ask questions of
          the universe, and then learn to live with those questions, is the way
          he achieves his own identity.`}
        </Text>
        <Text>
          {`But no society is really anxious to have that kind of person around.
          What societies really, ideally, want is a citizenry which will simply
          obey the rules of society. If a society succeeds in this, that society
          is about to perish. The obligation of anyone who thinks of himself as
          responsible is to examine society and try to change it and to fight it
          – at no matter what risk. This is the only hope society has. This is
          the only way societies change."`}
        </Text>
        <Text fontWeight="semibold">
          {`"A Talk to Teachers"`} <br />
          James Baldwin <br />
          October 16, 1963
        </Text>
      </Box>
    </Flex>
  );
};

export default BaldwinQuote;
