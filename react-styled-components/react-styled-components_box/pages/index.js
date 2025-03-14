import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Flexbox>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </Flexbox>
  );
}

const Flexbox = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
