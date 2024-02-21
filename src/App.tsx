import { FC } from "react";
import "./style/App.css";
import { useGetProductsQuery } from "./redux/productsApi";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { addToCart, decreaseProductCount, deleteFromCart, increaseProductCount } from "./redux/cartSlice";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import CartPopup from "./components/CartPopup/CartPopup";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.list);

  const { data: products, isError: isProductsError, isLoading: isProductsLoading } = useGetProductsQuery();

  return (
    <div className="App">
      <Header />
      <ProductsList />
      <CartPopup />
    </div>
  );
};

export default App;
