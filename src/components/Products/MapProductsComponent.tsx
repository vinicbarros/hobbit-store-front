import { ProductType } from "../../types/productTypes";
import ShortProductComponent from "../common/ShortProduct";

export default function MapProductsComponent({
  data,
  option,
}: {
  data: ProductType[];
  option: string;
}) {
  if (option === "lowestPrice") {
    return (
      <>
        {data
          .sort((a, b) => a.price - b.price)
          .map((product) => (
            <ShortProductComponent
              key={product._id}
              shortProduct={product}
            />
          ))}
      </>
    );
  }

  if (option === "biggestPrice") {
    return (
      <>
        {data
          .sort((a, b) => b.price - a.price)
          .map((product) => (
            <ShortProductComponent
              key={product._id}
              shortProduct={product}
            />
          ))}
      </>
    );
  }

  if (option === "asc") {
    return (
      <>
        {data
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .map((product) => (
            <ShortProductComponent
              key={product._id}
              shortProduct={product}
            />
          ))}
      </>
    );
  }

  if (option === "desc") {
    return (
      <>
        {data
          .sort((a, b) => (a.name > b.name ? -1 : 1))
          .map((product) => (
            <ShortProductComponent
              key={product._id}
              shortProduct={product}
            />
          ))}
      </>
    );
  }

  return (
    <>
      {data.map((product) => (
        <ShortProductComponent
          key={product._id}
          shortProduct={product}
        />
      ))}
    </>
  );
}
