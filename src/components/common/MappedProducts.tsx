import { useState } from "react";
import styled from "styled-components";
import { ProductType } from "../../types/productTypes";
import FilterByComponent from "../Products/FilterByComponent";
import MapProductsComponent from "../Products/MapProductsComponent";
import LoadingPage from "./LoadingPage";

export default function MappedProducts({ data }: { data: ProductType[] }) {
  const [selectState, setSelectState] = useState("default");

  return (
    <>
      <FilterByComponent setSelectState={setSelectState} />
      <Wrapper>
        {data.length > 0 ? (
          <MapProductsComponent
            data={data}
            option={selectState}
          />
        ) : (
          <LoadingPage />
        )}
      </Wrapper>
    </>
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
