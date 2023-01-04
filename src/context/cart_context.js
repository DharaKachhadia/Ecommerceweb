import {createContext, useContext, useReducer, useEffect} from 'react';
import reducer from '../reducer/CartReducer';

const CartContext = createContext ();
const getLocalCartData = () => {
  let localCartData = localStorage.getItem ('dharaCard');
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse (localCartData);
  }
};
const initialState = {
  cart: [],
  cart: getLocalCartData (),
  total_item: '',
  total_price: '',
  shipping_fee: 50000,
};

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer (reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch ({type: 'ADD_TO_CART', payload: {id, color, amount, product}});
  };

  const removeItem = id => {
    dispatch ({type: 'REMOVE_ITEM', payload: id});
  };

  // to clear the cart
  const clearCart = () => {
    dispatch ({type: 'CLEAR_CART'});
  };

  // increment and decrement the product

  const setDecrease = id => {
    dispatch ({type: 'SET_DECREMENT', payload: id});
  };

  const setIncrease = id => {
    dispatch ({type: 'SET_INCREMENT', payload: id});
  };

  //add the data is in local storage
  // get or set this two conditional

  useEffect (
    () => {
      //this is two for basic understand you can sort the code using 3rd
      dispatch ({type: 'CART_ITEM_TOTAL'});
      dispatch ({type: 'CART_TOTAL_PRICE'});
      // dispatch ({type: 'CART_TOTAL_PRICE_ITEM'});
      localStorage.setItem ('dharaCard', JSON.stringify (state.cart));
    },
    [state.cart]
  );
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext (CartContext);
};

export {CartProvider, useCartContext};
