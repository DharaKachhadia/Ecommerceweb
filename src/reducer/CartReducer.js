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
    let cartProduct;

    cartProduct = {
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

  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter (cur => cur.id !== action.payload);

    return {
      ...state,
      cart: updatedCart,
    };
  }
  return state;
};

export default cartReducer;
