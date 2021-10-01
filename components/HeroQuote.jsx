import { useEffect } from "react";
import { Flex, Grid, Box, Center, Text, Divider } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeroQuote = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 960px)": function () {
        gsap.fromTo(
          ".bookstore-img",
          {
            y: 0,
            filter: "brightness(100%)",
          },
          {
            y: "100%",
            filter: "brightness(25%)",
            scrollTrigger: {
              trigger: ".bookstore-img",
              start: "top top",
            },
            duration: 1,
          }
        );
      },
      "(max-width: 960px)": function () {
        gsap.fromTo(
          ".hero-text-2",
          {
            y: 0,
          },
          {
            y: "-100%",
            color: "white",
            scrollTrigger: {
              trigger: ".hero-text-2",
              start: "top 90%",
            },
            duration: 1,
          }
        ),
          gsap.fromTo(
            ".bookstore-img",
            {
              filter: "brightness(100%)",
            },
            {
              filter: "brightness(25%)",
              scrollTrigger: {
                trigger: ".bookstore-img",
                start: "top 35%",
              },
              duration: 1,
            }
          );
      },
    });
  });
  return (
    // Make this box flex to center in the landing page
    <Center
      p="0 12%"
      fontFamily="lora"
      lineHeight="2em"
      bgColor="offwhite"
      minH="100vh"
    >
      <Flex
        pt={4}
        pb={4}
        borderTop="#9B8D84 solid 2px"
        borderBottom="#9B8D84 solid 2px"
      >
        <Text w="50%" p={5} borderRight="#9B8D84 solid 1px">
          “The purpose of education, finally, is to create in a person the
          ability to look at the world for himself, to make his own decisions,
          to say to himself this is black or this is white, to decide for
          himself whether there is a God in heaven or not. To ask questions of
          the universe, and then learn to live with those questions, is the way
          he achieves his own identity. But no society is really anxious to have
          that kind of person around.
        </Text>
        <Text w="50%" p={5} borderLeft="#9B8D84 solid 1px">
          What societies really, ideally, want is a citizenry which will simply
          obey the rules of society. If a society succeeds in this, that society
          is about to perish. The obligation of anyone who thinks of himself as
          responsible is to examine society and try to change it and to fight it
          – at no matter what risk. This is the only hope society has. This is
          the only way societies change.” <br />
          <br />- <b>James Baldwin {`“A Talk to Teachers"`} October 16, 1963</b>
        </Text>
      </Flex>
    </Center>
  );
};

export default HeroQuote;
