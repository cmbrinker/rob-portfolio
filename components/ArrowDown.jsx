import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Center } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ArrowDown = () => {
  gsap.registerPlugin(ScrollTrigger);

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

  return (
    <Center gridColumn="1/3">
      <ChevronDownIcon fontSize="40px" color="grey" className="down-icon" />
    </Center>
  );
};

export default ArrowDown;
