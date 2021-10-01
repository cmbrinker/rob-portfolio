import {
  Accordion as AccordionContainer,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";

const Accordion = ({ heading, children }) => {
  return (
    <AccordionContainer allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Heading
            as="h2"
            ml={4}
            pt={2}
            pb={2}
            size="md"
            fontFamily="slab"
            fontWeight="light"
          >
            {heading}
          </Heading>
          <AccordionIcon m={2} />
        </AccordionButton>
        <AccordionPanel m="0 2em" fontFamily="abel" fontSize="lg">
          {children}
        </AccordionPanel>
      </AccordionItem>
    </AccordionContainer>
  );
};

export default Accordion;
