import { useEffect } from "react";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeroBanner = () => {
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
    <Flex
      bgColor="#222831"
      color="white"
      h="100vh"
      justifyContent="space-around"
      alignItems="center"
      fontFamily="yaldevi"
    >
      <Box
        w="30%"
        h="100%"
        style={{
          background:
            "linear-gradient(rgba(57, 62, 70, .8), rgba(57, 62, 70, .8)), 100%/cover url('backgrounds/classroom.jpg')",
        }}
      ></Box>
      <Flex direction="column" justifyContent="center" p="1em">
        <Text p="2em 0" color="neonGreen" fontSize="xl">
          Welcome to the <b>Portfolio</b> of
        </Text>
        <Heading as="h1" fontFamily="lora" fontSize="6xl">
          Robert
          <br /> {`O'Donnell`}
        </Heading>
        <Text p="2em 0" fontWeight="light" fontSize="2xl">
          An <b>Educator</b> Based in North Carolina
        </Text>
      </Flex>
    </Flex>
  );
};

export default HeroBanner;
