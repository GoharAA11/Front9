
import { useReducer, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ProductList } from './components/ProductList';
import { Basket } from './components/Basket';
import { BookContext, initialState, reducer } from './context';
import { ProductItem } from './components/ProductItem';
import { BasketItem } from './components/BasketItem';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", payload: res });
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.basket]);


  return (
    <BookContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <ProductList />
        <Basket />
      </div>


      <div className='row'>
        <strong className='total'>
          <h3>Total: {state.totalValue} USD</h3>
        </strong>
      </div>

    </BookContext.Provider>
  );
}

export default App;
