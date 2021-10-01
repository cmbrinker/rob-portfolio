import { Box, Flex, Image } from "@chakra-ui/react";

const MenuBox = ({ image, heading }) => {
  return (
    <Flex
      w="200px"
      h="200px"
      m="1em"
      p="5px"
      justifyContent="center"
      alignItems="center"
      border="white solid 5px"
      pos="relative"
    >
      <Image src={image} alt="book" w="100px" />
      <Flex
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        opacity="0"
        bgColor="rgba(0, 0, 0, .8)"
        z-index="2"
        _hover={{ opacity: 1, transition: ".7s" }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          p="5px"
          color="white"
          fontFamily="slab"
          fontWeight="bold"
          fontSize="1.8em"
          textAlign="center"
          opacity="0"
          transform="translateY(30px)"
          _hover={{
            transform: "translateY(0)",
            opacity: 1,
            transition: ".3s",
            transitionDelay: ".2s",
          }}
        >
          {heading}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MenuBox;
