import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/productTypes";
import formattedValue from "../../helpers/formatValue";
import AddToCartButton from "../Cart/AddToCartButton";

export default function ShortProductComponent({ shortProduct }: { shortProduct: ProductType }) {
  const navigate = useNavigate();

  return (
    <ShortProductWrapper>
      <Image
        src={shortProduct.image}
        alt="oi"
        onClick={() => {
          navigate(`/products/product/${shortProduct._id}`);
        }}
      />
      <InfoBox>
        <WrapBox
          onClick={() => {
            navigate(`/products/product/${shortProduct._id}`);
          }}
        >
          <InfoTitle>{shortProduct.name}</InfoTitle>
          <InfoPrice>{formattedValue(shortProduct.price)}</InfoPrice>
        </WrapBox>
        <AddToCartButton
          page="products"
          itemId={shortProduct._id}
        />
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
  cursor: pointer;
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
  cursor: pointer;
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
