import { extendTheme } from "@chakra-ui/react";
import "@fontsource/abel";
import "@fontsource/lora";
import "@fontsource/josefin-slab";

const theme = extendTheme({
  fonts: {
    abel: "Abel",
    lora: "Lora",
    slab: "Josefin Slab",
  },
});

export default theme;
