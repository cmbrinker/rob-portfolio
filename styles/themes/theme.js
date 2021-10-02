import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/abel";
import "@fontsource/lora";
import "@fontsource/josefin-slab";

const theme = extendTheme({
  fonts: {
    abel: "Abel",
    lora: "Lora",
    slab: "Josefin Slab",
  },
  colors: {
    offwhite: "#F5F5F5",
    bronze: "#E0DDD5",
  },
});

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1265px",
});

export default theme;
