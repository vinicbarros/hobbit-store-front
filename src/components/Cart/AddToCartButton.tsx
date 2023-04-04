import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { postCart } from "../../services/cartService";

export default function AddToCartButton({ itemId, page }: { itemId: string; page: string }) {
  const queryClient = useQueryClient();
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
    <Button
      page={page}
      onClick={() => {
        addToCart(itemId);
      }}
      disabled={disable}
    >
      {disable ? (
        <TailSpin
          width="14px"
          color="#ffffff"
        />
      ) : (
        "Adicionar ao carrinho"
      )}
    </Button>
  );
}

const Buttodn = styled.button`
  border: none;
  border-radius: 5px;

  font-weight: 600;
  font-size: 11px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    background-color: #432c5c;
  }
`;

const Button = styled.button<IButtonProps>`
  border: none;
  border-radius: 5px;
  margin-top: ${(props) => (props.page === "produto" ? "35px" : "0px")};
  width: ${(props) => (props.page === "produto" ? "45%" : "")};
  align-self: center;
  height: ${(props) => (props.page === "produto" ? "50px" : "32px")};
  background-color: #644684;
  color: #ffffff;
  font-weight: 600;
  font-family: "Poppins";
  font-size: ${(props) => (props.page === "produto" ? "" : "10px")};

  @media screen and (min-width: 600px) {
    max-width: 300px;
    align-self: flex-start;

    & + & {
      margin-left: 20px;
    }
  }
`;

interface IButtonProps {
  page?: string;
}
