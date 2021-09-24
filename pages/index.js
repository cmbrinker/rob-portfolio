import { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  UnorderedList,
  Center,
  Text,
  List,
  Grid,
  ListItem,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Sidebar from "../components/Sidebar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Awards from "../components/Awards";
import Body from "../layout/Body";
import BodySection from "../components/Education";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <Box m="0">
      <Sidebar />
      <Body>
        <Flex
          h="100vh"
          bgImage="backgrounds/bookstore.jpg"
          bgSize="cover"
          bgPos="center"
          fontFamily="lora"
          direction="column"
        >
          <Box
            p="4em"
            color="white"
            bg="rgba(0, 0, 0, .7)"
            h="100vh"
            fontSize="1.5em"
            direction="column"
          >
            <Text>
              “The purpose of education, finally, is to create in a person the
              ability to look at the world for himself, to make his own
              decisions, to say to himself this is black or this is white, to
              decide for himself whether there is a God in heaven or not. To ask
              questions of the universe, and then learn to live with those
              questions, is the way he achieves his own identity.
            </Text>
            <br />
            <Text>
              But no society is really anxious to have that kind of person
              around. What societies really, ideally, want is a citizenry which
              will simply obey the rules of society. If a society succeeds in
              this, that society is about to perish. The obligation of anyone
              who thinks of himself as responsible is to examine society and try
              to change it and to fight it – at no matter what risk. This is the
              only hope society has. This is the only way societies change.”
            </Text>
            <br />
            <Text textAlign="right">
              James Baldwin, “A Talk to Teachers", October 16, 1963
            </Text>
          </Box>
        </Flex>
        <Flex
          bgImage="backgrounds/books.jpg"
          bgSize="cover"
          bgPos="center"
          direction="column"
        >
          <Experience />
          <Education />
        </Flex>
        <Flex
          bgImage="backgrounds/pencils.jpg"
          bgSize="cover"
          bgPos="center"
          direction="column"
        >
          <Awards />
          <Awards />
        </Flex>
      </Body>
    </Box>
  );
};

export default Home;
