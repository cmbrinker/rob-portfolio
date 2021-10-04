import {
  Accordion as AccordionContainer,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";

const Accordion = ({
  heading,
  headingSize = "lg",
  color,
  borderColor,
  children,
}) => {
  return (
    <AccordionContainer allowMultiple w="100%" borderColor={borderColor}>
      <AccordionItem>
        <AccordionButton justifyContent="center" color={color}>
          <Heading
            as="h2"
            ml={4}
            pt="1em"
            pb="1em"
            size={headingSize}
            fontFamily="yaldevi"
            fontWeight="light"
          >
            {heading}
          </Heading>
          <AccordionIcon m={2} />
        </AccordionButton>
        <AccordionPanel fontSize="lg">{children}</AccordionPanel>
      </AccordionItem>
    </AccordionContainer>
  );
};

export default Accordion;
