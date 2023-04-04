import styled from "styled-components";

export default function EmptyCart() {
  return (
    <Container>
      <Wrapper>
        <Title>Opa, seu carrinho está vazio!</Title>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2``;
