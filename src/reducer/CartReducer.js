const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let {id, color, amount, product} = action.payload;
    console.log (
      '🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product',
      id,
      color,
      amount,
      product
    );

    // tackle the exiting with new data this is existingProduct

    let existingProduct = state.cart.find (cur => cur.id == id + color);
    console.log (
      '🚀 ~ file: cartReducer.js ~ line 4 ~ existingProduct ``````````````````````````````````````````````~ ',
      existingProduct
    );

    // if existingProduct then
    if (existingProduct) {
      let updatedProduct = state.cart.map (cur => {
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
    let updatedCart = state.cart.filter (cur => cur.id !== action.payload);

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
  return state;
};

export default cartReducer;
