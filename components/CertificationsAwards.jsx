import { useEffect } from "react";
import gsap from "gsap";
import { Flex, Heading, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CertificationsAwards = () => {
  gsap.registerPlugin(ScrollTrigger);

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

  return (
    <Flex
      bgColor="#F5F5F5"
      direction="column"
      overflow="hidden"
      p={[2, 6, 6, 8]}
    >
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
  );
};

export default CertificationsAwards;
