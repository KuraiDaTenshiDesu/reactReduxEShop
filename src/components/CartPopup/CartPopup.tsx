import { FC } from "react";
import styles from "./CartPopup.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { hidePopup } from "../../redux/popupSlice";

const CartPopup: FC = () => {
  const isVisible = useAppSelector((state) => state.popup.popupShown);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.list);

  return (
    <div className={`${styles.Popup} ${isVisible && styles.Popup__visible}`}>
      <div className={styles.Cart}>
        <button onClick={() => dispatch(hidePopup())}>X</button>
        {cart.length === 0 && <h2>Your cart is empty</h2>}
        {cart.map((product) => (
          <h2 key={product.id}>
            {product.name} | {product.count} | ${product.price}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default CartPopup;
