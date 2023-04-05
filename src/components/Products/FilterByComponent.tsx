import styled from "styled-components";

export default function FilterByComponent({
  setSelectState,
}: {
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Container>
      <Select
        defaultValue="default"
        onChange={(event) => {
          setSelectState(event.target.value);
        }}
      >
        <option
          disabled
          hidden
          value="default"
        >
          Filtrar por
        </option>
        <option value="biggestPrice">Maior preço</option>
        <option value="lowestPrice">Menor preço</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </Select>
    </Container>
  );
}

const Select = styled.select`
  border: none;
`;

const Container = styled.section`
  width: 90%;
  margin-inline: auto;
`;
