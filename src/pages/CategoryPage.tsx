import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/common/Header";
import LoadingPage from "../components/common/LoadingPage";
import MappedProducts from "../components/common/MappedProducts";
import { getProductsByCategory } from "../services/productService";

export default function CategoryPage() {
  const { category } = useParams();

  const getProductsWithCategory = () => {
    if (!category) return;
    // eslint-disable-next-line consistent-return
    return getProductsByCategory(category);
  };

  const { data, isLoading } = useQuery("products", getProductsWithCategory, {
    retry: false,
    onError: (err: AxiosError) => err,
  });

  if (isLoading || !data) {
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
      <CategoryTitle>{category}</CategoryTitle>
      <MappedProducts data={data} />
    </>
  );
}

const CategoryTitle = styled.h1`
  width: 90%;
  margin-top: 110px;
  margin-inline: auto;
  color: #442e21;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
