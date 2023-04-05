import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AddToCartButton from "../components/Cart/AddToCartButton";
import Header from "../components/common/Header";
import LoadingPage from "../components/common/LoadingPage";
import formattedValue from "../helpers/formatValue";
import { getProduct } from "../services/productService";

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProductWithId = async () => {
    if (!productId) return;
    // eslint-disable-next-line consistent-return
    return getProduct(productId);
  };

  const { data, isLoading } = useQuery("product", getProductWithId, {
    retry: true,
    onError: (err: AxiosError) => err,
  });

  if (!data || isLoading)
    return (
      <>
        <Header />
        <LoadingPage />
      </>
    );

  if (data._id !== productId) {
    return (
      <>
        <Header />
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Image
          src={data.image}
          alt={data.name}
        />
        <CategoryName>{data.category}</CategoryName>
        <ProductTitle>{data.name}</ProductTitle>
        <ProductDescription>{data.details}</ProductDescription>
        <ProductValue>{formattedValue(data.price)}</ProductValue>
        <ButtonWrap>
          <Button
            background="#d8c7b8"
            border="2px solid #644684"
            fontColor="#644684"
            onClick={() => {
              navigate("/");
            }}
          >
            Continuar comprando
          </Button>
          <AddToCartButton
            itemId={data._id}
            page="produto"
          />
        </ButtonWrap>
      </Container>
    </>
  );
}

const Container = styled.section`
  margin-top: 110px;
  width: 90%;
  border-radius: 5px;
  padding: 10px;
  margin-inline: auto;
  background-color: #d8c7b8;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 5px;
  max-width: 330px;
`;

const CategoryName = styled.h4`
  margin-top: 15px;
  font-size: 16px;
  color: #fbc337;
  font-weight: bold;
`;

const ProductTitle = styled.h1`
  font-size: 26px;
  margin-top: 8px;
  font-weight: bold;
  color: #010416;
`;

const ProductDescription = styled.p`
  margin-top: 5px;
  color: #58463c;
  font-weight: bold;
`;

const ProductValue = styled.h3`
  font-size: 24px;
  margin-top: 12px;
  color: #4b965a;
  font-weight: bold;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    justify-content: left;
  }
`;

const Button = styled.button<IButtonProps>`
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: 5px;
  margin-top: 35px;
  width: 45%;
  align-self: center;
  height: 50px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.fontColor};
  font-family: "Poppins";
  cursor: pointer;

  @media screen and (min-width: 600px) {
    max-width: 300px;
    align-self: flex-start;
    margin-right: 20px;
  }
`;

interface IButtonProps {
  background?: string;
  border?: string;
  fontColor?: string;
}
