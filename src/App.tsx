import { WrapperApp } from './AppStyle';
import { Footer } from './frame/Footer/Footer';
import { Header } from './frame/Header/Header';
import { Nav } from './frame/Nav/Nav';
import { Section } from './frame/Section/Section';

export const App = () => {

  return (
    <WrapperApp>
      <Header />
      <Nav />
      <Section />
      <Footer />
    </WrapperApp>
  );
}