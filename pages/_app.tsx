import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";
import { ProductsProvider } from "@/context/products-context";
import Header from "@/components/Header";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    blackMain: "#000",
    orangeMain: "#ec5e2a",
    orangeSecondary: "#F28F6A",
    black07: "rgba(0, 0, 0, 0.7)",
    gray: "#F2F2F2",
    themeBg: "#FFFFFF",
    themeSecondaryBg: "rgba(237, 235, 235, 0.74)",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  console.log("FILTERS", pageProps.filters);
  console.log("min price: ", pageProps.defaultMinPrice);
  console.log("max price", pageProps.defaultMaxPrice);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}
