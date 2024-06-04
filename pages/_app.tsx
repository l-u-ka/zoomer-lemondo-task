import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";
import { ProductsProvider } from "@/context/products-context";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    blackMain: "#000",
    orangeMain: "#ec5e2a",
    orangeSecondary: "#F28F6A",
    black07: "rgba(0, 0, 0, 0.7)",
    gray: "#F2F2F2",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}
