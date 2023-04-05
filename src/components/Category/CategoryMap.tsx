import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CategoryMap() {
  const navigate = useNavigate();
  return (
    <Container>
      <CategoryBox
        onClick={() => {
          navigate("/products/Anéis");
        }}
      >
        <Image
          src="https://i.imgur.com/BJFabUQ.png"
          alt="Anéis"
        />
      </CategoryBox>
      <CategoryBox
        onClick={() => {
          navigate("/products/Armas");
        }}
      >
        <Image
          src="https://i.imgur.com/0A6bEsD.png"
          alt="Armas"
        />
      </CategoryBox>
      <CategoryBox
        onClick={() => {
          navigate("/products/Artefatos");
        }}
      >
        <Image
          src="https://i.imgur.com/jTdvg8I.png"
          alt="Artefatos"
        />
      </CategoryBox>
      <CategoryBox
        onClick={() => {
          navigate("/products/Suprimentos");
        }}
      >
        <Image
          src="https://i.imgur.com/w0cTwIU.png"
          alt="Suprimentos"
        />
      </CategoryBox>
      <CategoryBox
        onClick={() => {
          navigate("/products/Vestuário");
        }}
      >
        <Image
          src="https://i.imgur.com/Ac6RUan.png"
          alt="Vestuário"
        />
      </CategoryBox>
    </Container>
  );
}

const Container = styled.section`
  width: 90%;
  margin-inline: auto;
  margin-top: 20px;
  padding-bottom: 40px;
  display: flex;

  overflow: scroll;
`;

const CategoryBox = styled.div`
  background-color: #fbc337;
  height: 80px;
  min-width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & + & {
    margin-left: 20px;
  }

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
`;
