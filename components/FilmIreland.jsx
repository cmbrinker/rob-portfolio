import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

const FilmIreland = () => {
  return (
    <Box bgColor="#082032" p="2em 0" color="white">
      <Flex justifyContent="center" alignItems="center">
        <Image
          src="icons/film-ireland.png"
          alt="film ireland icon"
          height="85px"
          m={4}
        />
        <Box w="60%">
          <Text>
            <Link
              href="https://filmireland.net/2016/04/07/cracking-the-egg-revisiting-boogaloo-and-graham/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{`Cracking the Egg: Revisiting 'Boogaloo and Graham'`}</b>
            </Link>
          </Text>
          <Text fontSize="md">
            Robert G. O’Donnell looks back at the Oscar-nominated, Bafta-winning
            short film Boogaloo and Graham and examines the film’s thematic
            exploration of current cultural anxieties through its symbolic
            context.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default FilmIreland;
