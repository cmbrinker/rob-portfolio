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
      <Heading
        as="h1"
        p={2}
        fontFamily="yaldevi"
        fontWeight="light"
        bgColor="rgb(51, 71, 86)"
        color="white"
        fontSize="2xl"
      >
        {`Rob O'Donnell`}
      </Heading>
      <Flex
        minH="600px"
        p="1em 8%"
        bg="linear-gradient(rgba(51, 71, 86, .89), rgba(51, 71, 86, .9)), url('backgrounds/lecture-chairs.jpg')"
        bgSize="cover"
        color="white"
        fontFamily="yaldevi"
        fontSize="1.1em"
        lineHeight="2em"
        alignItems="center"
      >
        <Flex direction="column">
          <Text p="1em" w="65%" ml="35%" fontWeight="semibold" fontSize="xl">
            “The purpose of education, finally, is to create in a person the
            ability to look at the world for himself, to make his own decisions,
            to say to himself this is black or this is white, to decide for
            himself whether there is a God in heaven or not. To ask questions of
            the universe, and then learn to live with those questions, is the
            way he achieves his own identity.
          </Text>
          <Text textAlign="end">
            James Baldwin
            <br />
            {`“A Talk to Teachers"`}
            <br />
            October 16, 1963
          </Text>
        </Flex>
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
            <Tab fontSize="md" fontWeight="semibold">
              Courses Taught
            </Tab>
            <Tab fontSize="md" fontWeight="semibold">
              Sample Syllabi
            </Tab>
            <Tab fontSize="md" fontWeight="semibold">
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
