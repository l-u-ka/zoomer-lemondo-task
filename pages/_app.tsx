import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";
import { ProductsProvider } from "@/context/products-context";
import Header from "@/components/Header";
import { FiltersProvider } from "@/context/filters-provider";
import "@/assets/fonts/fonts.css";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    blackMain: "#000",
    orangeMain: "rgb(236, 94, 42)",
    orangeSecondary: "#f28f6a",
    black07: "rgba(0, 0, 0, 0.7)",
    gray: "#F2F2F2",
    themeBg: "#FFFFFF",
    themeSecondaryBg: "rgba(237, 235, 235, 0.74)",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <FiltersProvider
          filters={pageProps.filters}
          defaultMaxPrice={pageProps.defaultMaxPrice}
          defaultMinPrice={pageProps.defaultMinPrice}
        >
          <ProductsProvider>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
          </ProductsProvider>
        </FiltersProvider>
      </ThemeProvider>
    </>
  );
}
