import { WrapperButton } from "./ButtonStyle";

interface IButton {
  children: JSX.Element;
  height?: number;
  width?: number;
  active?: boolean;
  disable?: boolean;
  onTouch: Function;
}

export const Button = (props: IButton) => {
  const {
    children,
    height = 3,
    width = 10,
    active = false,
    disable = false,
    onTouch,
  } = props;

  return (
    <WrapperButton
      height={height}
      width={width}
      active={active}
      disable={disable}
      onClick={() => onTouch()}
    >
      {children}
    </WrapperButton>
  );
};
