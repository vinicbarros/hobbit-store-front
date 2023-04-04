import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import Container from "./Container";

export default function LoadingPage() {
  return (
    <Container>
      <Wrapper>
        <TailSpin color="#010416" />
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
