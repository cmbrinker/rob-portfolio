import { useEffect, useRef } from "react";
import { Box, Flex, List, ListItem, Text, Heading } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Education = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".education",
      {
        y: 0,
      },
      {
        y: 50,
        scrollTrigger: {
          trigger: ".education",
          scrub: true,
        },
      }
    );
  });

  return (
    <Flex
      className="education"
      justifyContent="space-between"
      p="5em 5%"
      bgColor="white"
    >
      <Heading as="h2" display="inline-block" fontFamily="abel">
        Education
      </Heading>
      <List>
        <ListItem>AP Literature & Composition Certified</ListItem>
        <ListItem>
          North Carolina Professional Educators License <br />
          (exp. 6/2024)
        </ListItem>
        <ListItem>
          Observer and Evaluator, College Credit Plus Program, Franklin
          University
        </ListItem>
      </List>
    </Flex>
  );
};

export default Education;
