import {
  Accordion as AccordionContainer,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";

const Accordion = ({ heading, headingSize = "lg", children }) => {
  return (
    <AccordionContainer allowMultiple w="100%" borderColor="bronze">
      <AccordionItem>
        <AccordionButton justifyContent="center">
          <Heading
            as="h2"
            ml={4}
            pt="1em"
            pb="1em"
            size={headingSize}
            fontFamily="slab"
            fontWeight="light"
          >
            {heading}
          </Heading>
          <AccordionIcon m={2} />
        </AccordionButton>
        <AccordionPanel fontFamily="lora" fontSize="lg">
          {children}
        </AccordionPanel>
      </AccordionItem>
    </AccordionContainer>
  );
};

export default Accordion;
