import { FC } from "react";
import "./style/App.css";
import { useGetProductsQuery } from "./redux/productsApi";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { addToCart, decreaseProductCount, deleteFromCart, increaseProductCount } from "./redux/cartSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.list);

  const { data: products, isError: isProductsError, isLoading: isProductsLoading } = useGetProductsQuery();

  if (isProductsError) return <h2>An error occured during loading goods, please try again later</h2>;

  if (isProductsLoading) return <h2>Loading</h2>;

  return (
    <div className="App">
      <div>
        <h2>Cart</h2>
        {cart.map((product) => (
          <h2 key={product.id}>
            {product.name} | {product.count}
            <button onClick={() => dispatch(deleteFromCart(product.id))}>Delete</button>
            <button onClick={() => dispatch(increaseProductCount(product.id))}>+</button>
            <button onClick={() => dispatch(decreaseProductCount(product.id))}>-</button>
          </h2>
        ))}
        {cart.length > 0 && <button>Checkout</button>}
      </div>
      <div className="Products">
        <h2>Products</h2>
        {products &&
          products.map((product) => (
            <div className="Product" key={product.id} onClick={() => dispatch(addToCart(product))}>
              <h3 className="Product__name">{product.name}</h3>
              <p className="Product__price">${product.price.toFixed(2)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
