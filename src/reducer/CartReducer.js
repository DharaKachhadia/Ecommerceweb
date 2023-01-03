const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { id, color, amount, product } = action.payload;
    console.log(
      '🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product',
      id,
      color,
      amount,
      product
    );

    // tackle the exiting with new data this is existingProduct

    let existingProduct = state.cart.find(cur => cur.id == id + color);
    console.log(
      '🚀 ~ file: cartReducer.js ~ line 4 ~ existingProduct ``````````````````````````````````````````````~ ',
      existingProduct
    );

    // if existingProduct then
    if (existingProduct) {
      let updatedProduct = state.cart.map(cur => {
        if (cur.id == id + color) {
          let newAmount = cur.amount + amount;

          if (newAmount >= cur.max) {
            newAmount = cur.max;
          }
          return {
            ...cur,
            amount: newAmount,
          };
        } else {
          return cur;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount, //object and key is same then you can write only the one time
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter(cur => cur.id !== action.payload);

    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }

  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }


  if (action.type === "CART_ITEM_TOTAL") {
    let updatedItem = state.cart.reduce((ini, cur) => {
      let { amount } = cur;

      ini = ini + amount;
      return ini;
    }, 0)

    return {
      ...state,
      total_item: updatedItem
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((ini, cur) => {
      let { price, amount } = cur;

      ini = ini + price * amount;
      return ini;
    }, 0)

    return {
      ...state,
      total_price: total_price
    };
  }

  return state;
};
export default cartReducer;
