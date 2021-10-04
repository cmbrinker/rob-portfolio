import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/abel";
import "@fontsource/lora";
import "@fontsource/josefin-slab";
import "@fontsource/yaldevi";

const theme = extendTheme({
  fonts: {
    abel: "Abel",
    lora: "Lora",
    slab: "Josefin Slab",
    yaldevi: "Yaldevi",
  },
  colors: {
    offwhite: "#F5F5F5",
    bronze: "#E0DDD5",
    neonGreen: "#00ADB5",
  },
  layerStyles: {
    tabPanelTitle: {
      as: "h3",
      mb: 4,
      size: "lg",
      fontWeight: "light",
      fontFamily: "lora",
    },
  },
});

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1265px",
});

export default theme;
