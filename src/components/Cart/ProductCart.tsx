import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import formattedValue from "../../helpers/formatValue";
import { removeFromCart } from "../../services/cartService";
import { CartType } from "../../types/cartType";

export default function ProductCart({ product }: { product: CartType }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const removeFromCartMutation = useMutation(
    (_id: string) => {
      return removeFromCart(_id);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries("cart");
      },
    }
  );

  const removeProduct = async (_id: string) => {
    setDisable(true);
    try {
      await removeFromCartMutation.mutateAsync(_id);
      toast.success("Item removido do carrinho!");
      setDisable(false);
    } catch (error) {
      toast.error("Algo deu errado!");
      setDisable(false);
      console.log(error);
    }
  };

  return (
    <ProductCartWrap>
      <InfoBox>
        <Image
          src={product.productImg}
          alt={product.productName}
          onClick={() => {
            navigate(`/products/product/${product.productId}`);
          }}
        />
        <WrapBox
          onClick={() => {
            navigate(`/products/product/${product.productId}`);
          }}
        >
          <ProductTitle>{product.productName}</ProductTitle>
          <ProductPrice>{formattedValue(product.productPrice)}</ProductPrice>
        </WrapBox>
      </InfoBox>
      <Button
        disabled={disable}
        onClick={() => {
          removeProduct(product._id);
        }}
      >
        {disable ? (
          <TailSpin
            width="14px"
            color="#ffffff"
          />
        ) : (
          "Excluir"
        )}
      </Button>
    </ProductCartWrap>
  );
}

const Image = styled.img`
  width: 60px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductCartWrap = styled.main`
  min-height: 80px;
  padding: 15px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Poppins";
  letter-spacing: 0.01cm;

  border-radius: 10px;

  & + & {
    -webkit-box-shadow: -1px -21px 2px -19px rgba(161, 144, 129, 0.66);
    -moz-box-shadow: -1px -21px 2px -19px rgba(161, 144, 129, 0.66);
    box-shadow: -1px -21px 2px -19px rgba(161, 144, 129, 0.66);
  }
`;

const InfoBox = styled.div`
  display: flex;
  cursor: pointer;
`;

const WrapBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ProductTitle = styled.h4`
  max-width: 150px;
  color: #010416;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  background-color: #46285f;
  font-family: "Poppins";
  color: #ffffff;
  font-weight: 500;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const ProductPrice = styled.h5`
  color: #4b965a;
  font-weight: bold;
`;
