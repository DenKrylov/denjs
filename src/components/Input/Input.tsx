import { WrapperInput } from "./InputStyle";

interface IInput {
  height?: number;
  width?: number;
}

export const Input = (props: IInput) => {
  const { height = 3, width = 10 } = props;

  return <WrapperInput height={height} width={width} />;
};
