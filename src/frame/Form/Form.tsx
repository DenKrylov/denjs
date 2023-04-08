import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import { WindowForm, WrapperForm } from "./FormStyle"

export const Form = () => {
  return (
    <WrapperForm>
      <WindowForm>
        <Input />
        <Input />
        <Input />
        <Button onTouch={() => null}><p>Отправить</p></Button>
      </WindowForm>
    </WrapperForm>
  )
}