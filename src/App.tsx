import { useState } from 'react';
import { WrapperApp } from './AppStyle';
import { Loading } from './frame/Loading/Loadign';
import { Section } from './frame/Section/Section';

export const App = () => {

  const [isLoad, setIsLoading] = useState<Boolean>(true);

  setTimeout(() => setIsLoading(false), 10000);

  return (
    <WrapperApp>
      { isLoad 
        ? <Loading />
        : <Section />
      }
    </WrapperApp>
  );
}