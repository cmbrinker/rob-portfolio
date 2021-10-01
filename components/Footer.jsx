import { Flex, Text } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Flex
      as="footer"
      bgColor="#9B8D84"
      h="50px"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <EmailIcon w={5} h={5} mr="10px" />
      <Text fontWeight="light">rob@robbymcroberson.org</Text>
    </Flex>
  );
};

export default Footer;
