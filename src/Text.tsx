import { VFC } from "react";
interface Props {
  color: string;
  fontSize: string;
}

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
