/* eslint-disable react/jsx-no-useless-fragment */
import { useQuery } from "react-query";
import styled from "styled-components";
import EmptyCart from "../components/Cart/EmptyCart";
import ProductCart from "../components/Cart/ProductCart";
import Header from "../components/common/Header";
import LoadingPage from "../components/common/LoadingPage";
import formattedValue from "../helpers/formatValue";
import { getCart } from "../services/cartService";
import { WrapperTitle } from "./Home";

export default function Cart() {
  const cartData = useQuery("cart", getCart);

  if (!cartData.data || cartData.isLoading)
    return (
      <>
        <Header />
        <LoadingPage />
      </>
    );

  const totalBuy = () => {
    let sum = 0;
    cartData.data.forEach((item) => {
      sum += item.productPrice;
    });
    return sum;
  };

  return (
    <>
      <Header />
      <WrapperTitle>Carrinho</WrapperTitle>
      <Wrapper>
        {cartData.data.length > 0 ? (
          cartData.data.map((product) => (
            <ProductCart
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </Wrapper>
      {cartData.data.length > 0 ? (
        <TotalInfo>
          <TotalTitle>Total da compra:</TotalTitle>
          <TotalValue>{formattedValue(totalBuy())}</TotalValue>
        </TotalInfo>
      ) : (
        <></>
      )}
    </>
  );
}

export const Wrapper = styled.section`
  width: 90%;
  margin-top: 10px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  background-color: #d8c7b8;

  border-radius: 10px;
`;

const TotalInfo = styled.section`
  width: 90%;
  margin-inline: auto;
`;

const TotalTitle = styled.h1`
  color: #442e21;
  font-weight: bold;
  margin-top: 20px;
  font-size: 20px;
`;

const TotalValue = styled.h2`
  color: #4b965a;
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
`;
