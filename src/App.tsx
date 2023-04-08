import { useRecoilValue } from 'recoil';
import { WrapperApp } from './AppStyle';
import { Footer } from './frame/Footer/Footer';
import { Form } from './frame/Form/Form';
import { Header } from './frame/Header/Header';
import { Nav } from './frame/Nav/Nav';
import { Section } from './frame/Section/Section';
import { isFormState } from './states/form/atom';

export const App = () => {

  const isForm = useRecoilValue(isFormState);

  return (
    <WrapperApp>
      <Header />
      <Nav />
      <Section />
      <Footer />
      { isForm && <Form /> }
    </WrapperApp>
  );
}