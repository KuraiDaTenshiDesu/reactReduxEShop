import { FC } from "react";
import styles from "./ProductItem.module.css";
import { TProduct } from "../../types";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addToCart } from "../../redux/cartSlice";

interface ProductItemProps {
  product: TProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.Product}>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
