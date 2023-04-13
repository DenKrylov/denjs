import { useRecoilValue, useSetRecoilState } from "recoil";
import { InfoMain, TextMain, WrapperMain } from "./MainStyle";
import { themeState } from "../../states/theme/atom";
import { Button } from "../../components/Button/Button";
import { isFormState } from "../../states/form/atom";

export const Main = () => {
  const color = useRecoilValue(themeState);

  const setIsForm = useSetRecoilState(isFormState);

  return (
    <WrapperMain>
      <InfoMain>
        <TextMain>Мы создадим вам сайт</TextMain>
        <TextMain>который приведет</TextMain>
        <TextMain>вас в будущее</TextMain>
      </InfoMain>
      <Button onTouch={() => setIsForm(true)}>
        <p>Создать сайт</p>
      </Button>
    </WrapperMain>
  );
};
