import { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Center,
  Text,
  List,
  ListItem,
  Heading,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { withTheme } from "@emotion/react";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const philosophyRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".down-icon",
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -20,
        ease: "power2",
        duration: 1.5,
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".bookstore-img",
      {
        y: 0,
        filter: "brightness(100%)",
      },
      {
        y: 615,
        filter: "brightness(10%)",
        scrollTrigger: {
          trigger: ".bookstore-img",
          start: "bottom 80%",
          scrub: 1,
        },
      }
    );
  });

  useEffect(() => {
    gsap.from(".heading-left", {
      x: -100,
      duration: 1,
      scrollTrigger: ".heading-left",
    });
  });

  useEffect(() => {
    gsap.from(".heading-right", {
      x: 100,
      duration: 1,
      scrollTrigger: ".heading-right",
    });
  });

  const handlePhilosophyClick = () => {
    philosophyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Flex justifyContent="space-between" p="15px 2em" bgColor="#F5F5F5">
        <Box
          color="#9B8D84"
          fontFamily="abel"
          fontWeight="semibold"
          fontSize="2em"
        >
          {`Rob O'Donnell`}
        </Box>
        <HStack
          fontFamily="abel"
          fontSize="1.2em"
          spacing="15px"
          alignItems="end"
          _hover={{ cursor: "pointer" }}
        >
          <Box onClick={handlePhilosophyClick}>Philosophy</Box>
          <Box>Courses</Box>
          <Box>Approach</Box>
          <Box>Certifications</Box>
          <Box>Awards</Box>
        </HStack>
      </Flex>
      <Flex p="3em 10%">
        <Center w="50%" p="2em">
          <Text fontSize="1.7em" fontFamily="slab">
            {`"The purpose of education, finally, is to create in a person the
            ability to look at the world for himself, to make his own decisions,
            to say to himself this is black or this is white, to decide for
            himself whether there is a God in heaven or not. To ask questions of
            the universe, and then learn to live with those questions, is the
            way he achieves his own identity.`}
          </Text>
        </Center>
        <Image
          src="backgrounds/bookstore.jpg"
          alt="bookstore"
          w="50%"
          h="100%"
          bgPos="center"
          className="bookstore-img"
        />
      </Flex>
      <Center>
        <ChevronDownIcon fontSize="40px" color="grey" className="down-icon" />
      </Center>
      <Flex p="2em 10%">
        <Center w="50%">
          <Text fontSize="2em" fontFamily="abel" textAlign="center">
            James Baldwin
            <br />
            <b>A Talk to Teachers</b>
            <br />
            10/16/1963
          </Text>
        </Center>
        <Center w="50%" p="2em" className="hero-text-2" zIndex="5">
          <Text fontSize="1.6em" fontFamily="slab" color="white">
            {`But no society is really anxious to have that kind of person around.
            What societies really, ideally, want is a citizenry which will
            simply obey the rules of society. If a society succeeds in this,
            that society is about to perish. The obligation of anyone who thinks
            of himself as responsible is to examine society and try to change it
            and to fight it – at no matter what risk. This is the only hope
            society has. This is the only way societies change."`}
          </Text>
        </Center>
      </Flex>
      <Box
        mt="2em"
        p="100px 10%"
        fontFamily="slab"
        bgColor="#F5F5F5"
        ref={philosophyRef}
      >
        <Heading as="h2" fontFamily="slab" textAlign="center" color="#9B8D84">
          Teaching Philosophy
        </Heading>
        <Center p="2em">
          <Text w="75%" fontSize="1.4em">
            Pariatur occaecat reprehenderit cupidatat sunt adipisicing. Officia
            in quis quis Lorem mollit. Id ad proident sint nisi ipsum minim do
            ut dolore magna non. Sunt mollit ut occaecat cillum ex cillum ex.
            Sint incididunt ex occaecat magna dolor id do exercitation officia
            officia proident consectetur est. Sunt velit minim quis sint
            proident sunt mollit est excepteur veniam.
          </Text>
        </Center>
      </Box>
      <Flex p="4em 10%">
        <Image
          w="40%"
          mr={2}
          src="backgrounds/lecture-hall.jpg"
          alt="classroom"
          objectFit="cover"
        />
        <Box w="60%">
          <Heading
            as="h2"
            fontFamily="slab"
            textAlign="center"
            color="white"
            p={2}
            bgColor="#C2B9B0"
          >
            Courses Taught / Sample Syllabus
          </Heading>
          <Flex
            p="2em"
            fontFamily="abel"
            textAlign="center"
            justifyContent="center"
            direction="column"
          >
            <Box m="1em 0">
              <Heading
                as="h3"
                m={2}
                fontFamily="abel"
                fontWeight="light"
                color="grey"
                display="inline-block"
              >
                High School
              </Heading>
              <List spacing="1em" mt="10px">
                <ListItem>Honors English 12</ListItem>
                <ListItem>Speech and Debate</ListItem>
              </List>
            </Box>
            <Box m="1em 0">
              <Heading
                as="h3"
                m={2}
                fontFamily="abel"
                fontWeight="light"
                color="grey"
                display="inline-block"
              >
                University and Community College
              </Heading>
              <List spacing="1.3em" mt="10px">
                <ListItem>Exploring Business Identities (ENG 220)</ListItem>
                <ListItem>Composition I (ENG 1100)</ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex p="4em 10%">
        <Box w="60%">
          <Heading
            as="h2"
            fontFamily="slab"
            textAlign="center"
            color="white"
            p={2}
            bgColor="#C2B9B0"
          >
            Pedagogical Approach / Sample Lesson Plans & Assignments
          </Heading>
          <Flex
            p="2em"
            fontFamily="abel"
            textAlign="center"
            justifyContent="center"
            direction="column"
          >
            <Box m="1em 0">
              <Heading
                as="h3"
                m={2}
                fontFamily="abel"
                fontWeight="light"
                color="grey"
                display="inline-block"
              >
                High School
              </Heading>
              <List spacing="1em" mt="10px">
                <ListItem>
                  Inclusion 9th Grade English - Colormaking and Active Reading
                </ListItem>
                <ListItem>
                  Standard 12h Grade English-Hip-hop and Shakespeare
                </ListItem>
                <ListItem>
                  Honors 12th Grade English - 1984 AI assignment
                </ListItem>
                <ListItem>Speech and Debate I - James Baldwin debate</ListItem>
              </List>
            </Box>
            <Box m="1em 0">
              <Heading
                m={2}
                as="h3"
                fontFamily="abel"
                fontWeight="light"
                color="grey"
                display="inline-block"
              >
                University and Community College
              </Heading>
              <List spacing="1.3em" mt="10px">
                <ListItem>Developmental Education - 041 Journal 4</ListItem>
                <ListItem>Composition I - Essay 4</ListItem>
                <ListItem>
                  College Writing I - Exploring Topics Through Annotated
                  References
                </ListItem>
                <ListItem>
                  Exploring Business Identities - Perspectives Paper
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
        <Image
          w="40%"
          ml={2}
          src="backgrounds/classroom.jpg"
          alt="classroom"
          objectFit="cover"
        />
      </Flex>

      <Flex bgColor="#F5F5F5" direction="column" p="50px 10%">
        <Flex direction="column" m="50px 0">
          <Heading
            as="h2"
            fontFamily="slab"
            fontWeight="semibold"
            p={2}
            className="heading-left"
            color="#9B8D84"
          >
            Certifications
          </Heading>
          <List
            gridColumn="2/3"
            p="2em"
            fontFamily="abel"
            spacing="1.5em"
            fontSize="1.2em"
          >
            <ListItem>AP Literature & Composition Certified</ListItem>
            <ListItem>{`North Carolina Professional Educator's License`}</ListItem>
            <ListItem>
              Observer & Evaluator, College Credit Plus Program, Franklin
              University
            </ListItem>
          </List>
        </Flex>

        <Flex direction="column" ml="40%">
          <Heading
            as="h2"
            fontFamily="slab"
            fontWeight="semibold"
            p={2}
            className="heading-right"
            color="#9B8D84"
          >
            Awards
          </Heading>
          <List
            gridColumn="1/2"
            p="2em 1em"
            fontFamily="abel"
            spacing="1.5em"
            fontSize="1.2em"
          >
            <ListItem>
              {`Provost's List for Instructional Excellence, Spring 2020`}
            </ListItem>
            <ListItem>
              <Link
                href="https://filmireland.net/2016/04/07/cracking-the-egg-revisiting-boogaloo-and-graham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`"Cracking the Egg: Revisiting 'Boogalo and Graham'"
                FilmIreland.net, April 2016`}
              </Link>
              <ExternalLinkIcon w={3} h={3} margin={2} />
            </ListItem>
          </List>
        </Flex>
      </Flex>
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
    </Box>
  );
};

export default Home;
