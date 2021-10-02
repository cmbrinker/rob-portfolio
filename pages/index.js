import {
  Grid,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import MenuBox from "../layout/MenuBox";
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
      <Heading as="h1" p={4} textAlign="center" fontFamily="slab">
        {`Rob O'Donnell`}
      </Heading>
      <Flex
        minH="700px"
        p="1em 8%"
        bgImage="backgrounds/lecture-hall.jpg"
        bgSize="cover"
        color="white"
        fontFamily="abel"
        fontSize="1.3em"
        lineHeight="2em"
        alignItems="center"
      >
        <Flex bgColor="rgba(0,0,0, .9)" border="white solid 2px">
          <Text w="50%" p="1em">
            “The purpose of education, finally, is to create in a person the
            ability to look at the world for himself, to make his own decisions,
            to say to himself this is black or this is white, to decide for
            himself whether there is a God in heaven or not. To ask questions of
            the universe, and then learn to live with those questions, is the
            way he achieves his own identity. But no society is really anxious
            to have that kind of person around. What societies really, ideally,
            want is a citizenry which will simply obey the rules of society.
          </Text>
          <Text w="50%" p="1em">
            If a society succeeds in this, that society is about to perish. The
            obligation of anyone who thinks of himself as responsible is to
            examine society and try to change it and to fight it – at no matter
            what risk. This is the only hope society has. This is the only way
            societies change.”
            <br />
            <br />
            <b>James Baldwin</b>
            <br /> {`“A Talk to Teachers"`}
            <br />
            October 16, 1963
          </Text>
        </Flex>
      </Flex>
      <Box bgColor="bronze" p="0 10%" lineHeight="2em">
        <Biography />
        <TeachingPhilosophy />
      </Box>
      <Box lineHeight="2em" bgColor="bronze">
        <Tabs variant="enclosed-colored">
          <TabList justifyContent="center" fontFamily="slab">
            <Tab fontSize="lg">Courses</Tab>
            <Tab fontSize="lg">Syllabi</Tab>
            <Tab fontSize="lg">Approach</Tab>
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
