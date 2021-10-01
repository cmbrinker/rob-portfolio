import { Box, Flex, Center, Image } from "@chakra-ui/react";
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
    <Box bgColor="offwhite">
      <Header />
      <HeroQuote />

      <Flex p="2em" flexWrap="wrap" justifyContent="center" bgColor="white">
        <MenuBox image="icons/biography.svg" heading="Biography" />
        <MenuBox image="icons/philosophy.svg" heading="Teaching Philosophy" />
        <MenuBox image="icons/philosophy.svg" heading="Courses Taught" />
        <MenuBox image="icons/philosophy.svg" heading="Sample Syllabi" />
        <MenuBox image="icons/philosophy.svg" heading="Pedagogical Approach" />
        <MenuBox
          image="icons/philosophy.svg"
          heading="Awards and Publications"
        />
        <MenuBox image="icons/philosophy.svg" heading="Further Reading" />
      </Flex>

      <Biography />
      <TeachingPhilosophy />
      <CoursesTaught />
      <SampleSyllabi />
      <PedagogicalApproach />
      <CertificationsAwards />
      <Footer />
    </Box>
  );
};

export default Home;
