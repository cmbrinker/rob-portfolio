import { useEffect } from "react";
import {
  Flex,
  Box,
  VStack,
  List,
  ListItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".experience",
      {
        y: 0,
      },
      {
        y: -100,
        scrollTrigger: {
          trigger: ".experience",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Flex
      className="experience"
      justifyContent="space-between"
      p="5em 5%"
      bgColor="grey"
    >
      <Heading as="h2" display="inline-block" fontFamily="abel">
        Experience
      </Heading>
      <List>
        <ListItem>something 1</ListItem>
        <ListItem>something 2</ListItem>
        <ListItem>something 2</ListItem>
      </List>
      <Text>CV</Text>
    </Flex>
  );
};

export default Experience;
