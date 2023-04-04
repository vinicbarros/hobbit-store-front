import styled from "styled-components";
import { useQuery } from "react-query";
import { RiShoppingCartLine } from "react-icons/ri";
import Logo from "../../assets/images/Logo.png";
import { SearchBar } from "../Searchbar/SearchBar";
import { getCart } from "../../services/cartService";

export default function Header() {
  const cartData = useQuery("cart", getCart);
  console.log(cartData.data);

  return (
    <Container>
      <BoxWrap>
        <ImageLogo
          src={Logo}
          alt="Logo"
        />
        <SearchBar />
        <CartBox>
          <RiShoppingCartLine
            style={{ color: "#ffffff", marginLeft: "10px" }}
            size={30}
          />
          <CartNumber>{cartData.data?.length}</CartNumber>
        </CartBox>
      </BoxWrap>
    </Container>
  );
}

const Container = styled.section`
  height: 90px;
  background-color: #4b965a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

const BoxWrap = styled.div`
  display: flex;
  width: 95%;
  margin-inline: auto;
  align-items: center;
  justify-content: center;
`;

const ImageLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: -10px;
  margin-right: 5px;
`;

const CartBox = styled.div`
  display: flex;
  position: relative;
`;

const CartNumber = styled.div`
  position: absolute;
  right: 0;
  margin-top: -3px;
  margin-right: -3px;
  z-index: 10;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #826e5a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
