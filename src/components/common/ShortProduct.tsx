import styled from "styled-components";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import { ProductType } from "../../types/productTypes";
import formattedValue from "../../helpers/formatValue";
import { postCart } from "../../services/cartService";

export default function ShortProductComponent({
  shortProduct,
  queryClient,
}: {
  shortProduct: ProductType;
  queryClient: QueryClient;
}) {
  const addToCartMutation = useMutation(
    (productId: string) => {
      return postCart(productId);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries("cart");
      },
    }
  );
  const [disable, setDisable] = useState(false);

  const addToCart = async (productId: string) => {
    setDisable(true);
    try {
      await addToCartMutation.mutateAsync(productId);
      toast.success("Item adicionado ao carrinho!");
      setDisable(false);
    } catch (error) {
      toast.error("Algo deu errado!");
      setDisable(false);
      console.log(error);
    }
  };

  return (
    <ShortProductWrapper>
      <Image
        src={shortProduct.image}
        alt="oi"
      />
      <InfoBox>
        <WrapBox>
          <InfoTitle>{shortProduct.name}</InfoTitle>
          <InfoPrice>{formattedValue(shortProduct.price)}</InfoPrice>
        </WrapBox>
        <AddToCartButton
          disabled={disable}
          onClick={() => {
            addToCart(shortProduct._id);
          }}
        >
          {disable ? (
            <TailSpin
              width="14px"
              color="#ffffff"
            />
          ) : (
            "Adicionar ao carrinho"
          )}
        </AddToCartButton>
      </InfoBox>
    </ShortProductWrapper>
  );
}

const ShortProductWrapper = styled.main`
  background-color: #d8c7b8;
  border-radius: 5px;
  width: 120px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  border-radius: 5px 5px 0 0;
`;

const InfoBox = styled.div`
  width: 120px;
  height: 110px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapBox = styled.div`
  margin-bottom: 5px;
`;

const InfoTitle = styled.p`
  color: #010416;
  font-weight: 500;
  font-size: 14px;
`;

const InfoPrice = styled.p`
  margin-top: 5px;
  color: #4b965a;
`;

const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #644684;
  color: #ffffff;
  font-weight: 600;
  font-size: 11px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: #432c5c;
  }
`;
