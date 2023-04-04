import { AxiosError } from "axios";
import { useQuery } from "react-query";
import styled from "styled-components";
import Header from "../components/common/Header";
import LoadingPage from "../components/common/LoadingPage";
import MappedProducts from "../components/common/MappedProducts";
import { getProducts } from "../services/productService";

export default function Home() {
  const productsData = useQuery("products", getProducts, {
    retry: false,
    onError: (err: AxiosError) => err,
  });

  if (!productsData.data || productsData.isLoading)
    return (
      <>
        <Header />
        <LoadingPage />
      </>
    );

  return (
    <>
      <Header />
      <WrapperTitle>Categorias</WrapperTitle>
      <MappedProducts data={productsData.data} />
    </>
  );
}

export const WrapperTitle = styled.h4`
  width: 90%;
  margin-inline: auto;
  color: #442e21;
  margin-top: 110px;
  font-size: 20px;
`;
