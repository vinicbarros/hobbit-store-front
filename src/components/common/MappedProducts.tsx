import styled from "styled-components";
import { ProductType } from "../../types/productTypes";
import LoadingPage from "./LoadingPage";
import ShortProductComponent from "./ShortProduct";

export default function MappedProducts({ data }: { data: ProductType[] }) {
  return (
    <Wrapper>
      {data.length > 0 ? (
        data.map((product) => (
          <ShortProductComponent
            key={product._id}
            shortProduct={product}
          />
        ))
      ) : (
        <LoadingPage />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 90%;
  margin-top: 10px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  //background-color: #d8c7b8;

  border-radius: 10px;
`;
