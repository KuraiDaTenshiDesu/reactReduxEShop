import { FC } from "react";
import styles from "./CartPopupItem.module.css";
import { CartProduct } from "../../types";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { decreaseProductCount, deleteFromCart, increaseProductCount } from "../../redux/cartSlice";

interface CartPopupItemProps {
  product: CartProduct;
}

const CartPopupItem: FC<CartPopupItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.Product}>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => dispatch(decreaseProductCount(product.id))} disabled={product.count <= 1}>
        -
      </button>
      <span>{product.count}</span>
      <button onClick={() => dispatch(increaseProductCount(product.id))}>+</button>
      <button onClick={() => dispatch(deleteFromCart(product.id))}>Delete</button>
    </div>
  );
};

export default CartPopupItem;
