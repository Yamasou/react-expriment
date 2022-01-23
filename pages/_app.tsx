import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Header } from "@/src/components/features/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Box padding={6}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
