import {
  Grid,
  Box,
  Flex,
  Center,
  Link,
  Heading,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  Header,
  Footer,
  ArrowDown,
  Biography,
  HeroQuote,
  TeachingPhilosophy,
  CoursesTaught,
  SampleSyllabi,
  PedagogicalApproach,
  CertificationsAwards,
} from "../components/index";

const Home = () => {
  return (
    <>
      {/* <Heading
        as="h1"
        p={2}
        fontFamily="yaldevi"
        fontWeight="light"
        bgColor="rgb(51, 71, 86)"
        color="white"
        fontSize="2xl"
      >
        {`Rob O'Donnell`}
      </Heading> */}
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
          // borderLeft="white solid 1px"
          // borderRight="white solid 1px"
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
            <br /> O'Donnell
          </Heading>
          <Text p="2em 0" fontWeight="light" fontSize="2xl">
            An <b>Educator</b> Based in North Carolina
          </Text>
        </Flex>
      </Flex>
      <Flex
        p="2em 8%"
        bgGradient="linear(to-br,#393E46 90%, #FFF 90%)"
        bgColor="#222831"
        color="white"
        fontFamily="yaldevi"
        fontSize="1.1em"
        lineHeight="2em"
        alignItems="center"
        borderTop="white solid 2px"
      >
        <Image
          src="images/james-baldwin.jpg"
          alt="james baldwin"
          w="300px"
          h="300px"
          boxShadow="-12px 12px 0 #00ADB5, 12px -12px 0 #00ADB5"
          border="white solid 2px"
        />
        <Box p="2em 4em">
          <Text fontSize="lg">
            “The purpose of education, finally, is to create in a person the
            ability to look at the world for himself, to make his own decisions,
            to say to himself this is black or this is white, to decide for
            himself whether there is a God in heaven or not. To ask questions of
            the universe, and then learn to live with those questions, is the
            way he achieves his own identity.
          </Text>
          <Text>
            But no society is really anxious to have that kind of person around.
            What societies really, ideally, want is a citizenry which will
            simply obey the rules of society. If a society succeeds in this,
            that society is about to perish. The obligation of anyone who thinks
            of himself as responsible is to examine society and try to change it
            and to fight it – at no matter what risk. This is the only hope
            society has. This is the only way societies change."
          </Text>
          <Text fontWeight="semibold">
            "A Talk to Teachers" <br />
            James Baldwin <br />
            October 16, 1963
          </Text>
        </Box>
      </Flex>

      <Box lineHeight="2em" fontSize="lg" fontFamily="yaldevi">
        <Biography />
        <Box bgColor="#082032" p="2em 0" color="white">
          <Flex justifyContent="center" alignItems="center">
            <Image
              src="icons/film-ireland.png"
              alt="film ireland icon"
              height="85px"
              m={4}
            />
            <Box w="60%">
              <Text>
                <Link
                  href="https://filmireland.net/2016/04/07/cracking-the-egg-revisiting-boogaloo-and-graham/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>{`Cracking the Egg: Revisiting 'Boogaloo and Graham'`}</b>
                </Link>
              </Text>
              <Text fontSize="md">
                Robert G. O’Donnell looks back at the Oscar-nominated,
                Bafta-winning short film Boogaloo and Graham and examines the
                film’s thematic exploration of current cultural anxieties
                through its symbolic context.
              </Text>
            </Box>
          </Flex>
        </Box>

        <TeachingPhilosophy />

        <Tabs variant="enclosed" p="2em 0" fontFamily="yaldevi">
          <TabList justifyContent="center">
            <Tab fontSize="md" fontWeight="light">
              Courses Taught
            </Tab>
            <Tab fontSize="md" fontWeight="light">
              Sample Syllabi
            </Tab>
            <Tab fontSize="md" fontWeight="light">
              Approach
            </Tab>
          </TabList>
          <TabPanels fontFamily="lora">
            <TabPanel>
              <CoursesTaught />
            </TabPanel>
            <TabPanel>
              <SampleSyllabi />
            </TabPanel>
            <TabPanel>
              <PedagogicalApproach />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Home;
