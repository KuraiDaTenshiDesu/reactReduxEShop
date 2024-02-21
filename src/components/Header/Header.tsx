import { FC, useState } from "react";
import style from "./Header.module.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { showPopup } from "../../redux/popupSlice";

const Header: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(value);
  };

  return (
    <header className={style.Header}>
      <div className={style.Logo}>Logo</div>
      <form className={style.Search_form} onSubmit={handleSearch}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search products" />
        <button className="material-symbols-outlined">search</button>
      </form>
      <button className={`${style.Cart_btn} material-symbols-outlined`} onClick={() => dispatch(showPopup())}>
        shopping_cart
      </button>
    </header>
  );
};

export default Header;
