import { FC } from "react";
import styles from "./CartPopup.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { hidePopup } from "../../redux/popupSlice";
import CartPopupItem from "../CartPopupItem/CartPopupItem";

const CartPopup: FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.popup.popupShown);
  const cart = useAppSelector((state) => state.cart.list);

  const handleHidePopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains(styles.Popup)) {
      dispatch(hidePopup());
    }
  };

  return (
    <div className={`${styles.Popup} ${isVisible && styles.Popup__visible}`} onClick={handleHidePopup}>
      <div className={styles.Cart}>
        {cart.length === 0 && <h2 style={{ textAlign: "center", marginTop: 25 }}>Your cart is empty</h2>}
        {cart.map((product) => (
          <CartPopupItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartPopup;
