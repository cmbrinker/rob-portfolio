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

const Awards = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".awards",
      {
        y: 0,
      },
      {
        y: 200,
        scrollTrigger: {
          trigger: ".awards",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Flex
      className="awards"
      justifyContent="space-between"
      p="5em 5%"
      bgColor="white"
    >
      <Heading as="h2" display="inline-block" fontFamily="abel">
        Awards
      </Heading>
      <List>
        <ListItem>
          -Provost’s List for Instructional Excellence, Spring 2020
        </ListItem>
        <ListItem>
          “Cracking the Egg: Revisiting ‘Boogaloo and Graham.’” FilmIreland.net.
          7 April 2016.
        </ListItem>
      </List>
      <Text>CV</Text>
    </Flex>
  );
};

export default Awards;
