const ProductReducer = (state, action) => {
  //   if (actions.type === 'SET_LOADING') {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }
  //   if (actions.type === 'MY_API_DATA') {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,

  //     };
  //   }
  //   if (actions.type === 'API_ERROR') {
  //     return {
  //       ...state,
  //       isError: true,
  //     };
  //   }
  //   return state;
  // };

  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_API_DATA':
      const featureData = action.payload.filter(curElem => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: true,
        product: action.payload,
        featureProducts: featureData,
      };

    case 'SET_SINGLE_PRODUCT':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case 'API_ERROR':
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
export default ProductReducer;
