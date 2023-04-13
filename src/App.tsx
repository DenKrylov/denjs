import { useRecoilValue } from "recoil";
import { WrapperApp } from "./AppStyle";
import { Footer } from "./frame/Footer/Footer";
import { Form } from "./frame/Form/Form";
import { Header } from "./frame/Header/Header";
import { Nav } from "./frame/Nav/Nav";
import { Section } from "./frame/Section/Section";
import { isFormState } from "./states/form/atom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { themeState } from "./states/theme/atom";

export const App = () => {
  const isDarkTheme = useRecoilValue(themeState);
  const isForm = useRecoilValue(isFormState);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <WrapperApp>
        <Header />
        <Nav />
        <Section />
        <Footer />
        {isForm && <Form />}
      </WrapperApp>
    </ThemeProvider>
  );
};
