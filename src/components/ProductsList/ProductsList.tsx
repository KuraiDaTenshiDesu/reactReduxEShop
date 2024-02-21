import { FC } from "react";
import styles from "./ProductsList.module.css";
import { useGetProductsQuery } from "../../redux/productsApi";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList: FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <div className={styles.Products}>
      {isError && <h2>Error</h2>}
      {isLoading && <h2>Loading</h2>}
      {products && products.map((product) => <ProductItem key={product.id} product={product} />)}
    </div>
  );
};

export default ProductsList;
