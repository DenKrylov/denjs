import { WrapperButton } from "./ButtonStyle";

interface IButton {
  content?: string;
}

export const Button = (props: IButton) => {
  const {content} = props;

  return (
    <WrapperButton>{ content }</WrapperButton>
  )
}