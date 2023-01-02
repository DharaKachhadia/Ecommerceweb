const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      let priceArr = action.payload.map (cur => cur.price);
      console.log ('&&&&&&&&&&&&&&&&&&&&&&&', priceArr);
      //first trick
      // console.log ('***********************', Math.max.apply (Math, priceArr));

      // importance 2nd method
      let maxPrice = priceArr.reduce (
        (initialVal, cur) => Math.max (initialVal, cur),
        0
      );
      // initialVal is 0 value so we couldn't get the inspect error

      //3rd way
      // let maxPrice = Math.max (...priceArr);

      console.log ('***********************', maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {...state.filters, maxPrice: maxPrice, price: maxPrice},
      };

    case 'SET_GRID_VIEW':
      return {
        ...state,
        grid_view: true,
      };

    case 'SET_LIST_VIEW':
      return {
        ...state,
        grid_view: false,
      };

    case 'GET_SORT_VALUE':
      // this two line we write for get the user click which option from dropdown  you can also use second way

      // let userSortValue = document.getElementById('sort');
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log("______________sort__________", sort_value)

      //---------------we get value from event and in payload we pass userValue------------//

      return {
        ...state,
        sorting_value: action.payload,
      };

    case 'SORTING_PRODUCTS':
      let newSortData;
      // let tempSortProduct = [...action.payload];

      //here we repeat same logic same code so we need to do "DON'T REPEAT OUR SELF IN CODE"

      // if (state.sorting_value === "lowest") {
      //   const sortingProducts = (a, b) => {
      //     return a.price - b.price
      //   }
      //   newSortData = tempSortProduct.sort(sortingProducts)
      // }
      // if (state.sorting_value === "highest") {
      //   const sortingProducts = (a, b) => {
      //     return b.price - a.price
      //   }
      //   newSortData = tempSortProduct.sort(sortingProducts)
      // }

      // if (state.sorting_value === "a-z") {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     a.name.localeCompare(b.name)
      //   )
      // }
      // if (state.sorting_value === "z-a") {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     b.name.localeCompare(a.name)
      //   )
      // }

      //----------------second way to use in some line of code------------------//
      const {filter_products, sorting_value} = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        //==========second sort way============
        // if (sorting_value === "lowest") {
        //   return a.price - b.price
        // }
        // if (sorting_value === "highest") {
        //   return b.price - a.price
        // }
        // if (sorting_value === "a-z") {
        //   return a.name.localeCompare(b.name)
        // }
        // if (sorting_value === "z-a") {
        //   return b.name.localeCompare(a.name)
        // }
        //}

        //you can use third easy way
        switch (sorting_value) {
          case 'lowest':
            return a.price - b.price;
          case 'highest':
            return b.price - a.price;
          case 'a-z':
            return a.name.localeCompare (b.name);
          case 'z-a':
            return b.name.localeCompare (a.name);
          default:
            return;
        }
      };
      newSortData = tempSortProduct.sort (sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case 'UPDATE_FILTERS_VALUE':
      const {name, value} = action.payload;
      console.log (
        '---------------------------------------------------------0890890890890890890890890890890890890890890',
        action.payload
      );
      console.log ('name value............', name, value);
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case 'FILTER_PRODUCTS':
      let {all_products} = state;
      let tempFilterProduct = [...all_products];
      console.log (tempFilterProduct);

      const {text, category, company, color, price} = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter ((cur, i) => {
          return cur.name.toLowerCase ().includes (text); //startsWith use this when you want to direct with start word filter
        });
      }
      if (category !== 'all') {
        tempFilterProduct = tempFilterProduct.filter (
          curElem => curElem.category === category
        );
      }

      if (company !== 'all') {
        tempFilterProduct = tempFilterProduct.filter (
          curElem => curElem.company.toLowerCase () === company.toLowerCase ()
        );
      }
      if (color !== 'all') {
        tempFilterProduct = tempFilterProduct.filter (curElem =>
          curElem.colors.includes (color)
        );
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter (
          cur => cur.price == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter (
          cur => cur.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          maxPrice: state.filters.maxPrice,
          minPrice: 0,
          price: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};
export default filterReducer;
