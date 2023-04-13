import { useSetRecoilState } from "recoil";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { WindowForm, WrapperForm } from "./FormStyle";
import { isFormState } from "../../states/form/atom";

export const Form = () => {
  const setIsForm = useSetRecoilState(isFormState);

  return (
    <WrapperForm onClick={() => setIsForm(false)}>
      <WindowForm>
        <Input />
        <Input />
        <Input />
        <Button onTouch={() => null}>
          <p>Отправить</p>
        </Button>
      </WindowForm>
    </WrapperForm>
  );
};
