import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './productcontex';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all"
  },

};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set grid_view
  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };
  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };

  //sorting function
  //for get the event which option click by the user

  const sorting = (event) => {
    let userValue = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue })
  }

  // to sort the products

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" })
    dispatch({ type: 'SORTING_PRODUCTS' });
  }, [products, state.sorting_value, state.filters])

  //update filter serch values

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
  }
  useEffect(
    () => {
      dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
    },
    [products]
  );

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
