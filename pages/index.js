import {
  Biography,
  HeroBanner,
  BaldwinQuote,
  FilmIreland,
  CourseTabs,
  TeachingPhilosophy,
} from "../components/index";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <BaldwinQuote />
      <Biography />
      <FilmIreland />
      <TeachingPhilosophy />
      <CourseTabs />
    </>
  );
};

export default Home;
