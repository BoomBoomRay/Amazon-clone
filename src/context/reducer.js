export const initialState = {
  basket: [
    // {
    //   id: '12321341',
    //   title:
    //     'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
    //   price: 11.96,
    //   rating: 5,
    //   image:
    //     'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    //   quantity: 1,
    // },
    // {
    //   id: '12321341',
    //   title:
    //     'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
    //   price: 11.96,
    //   rating: 5,
    //   image:
    //     'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    //   quantity: 1,
    // },
    // {
    //   id: '12321341',
    //   title:
    //     'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
    //   price: 11.96,
    //   rating: 5,
    //   image:
    //     'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    //   quantity: 1,
    // },
    // {
    //   id: '12321341',
    //   title:
    //     'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
    //   price: 11.96,
    //   rating: 5,
    //   image:
    //     'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    //   quantity: 1,
    // },
  ],
  user: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];
      let index = state.basket.findIndex((i) => i.id === action.id);
      if (index >= 0) {
        newBasket = newBasket.filter((i, ind) => ind !== index);
        // newBasket.splice(action.ind, 1);
      } else {
        console.warn(
          `Cant Remove product (id: ${action.id}) as it is not in basket`
        );
      }
      return { ...state, basket: newBasket };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
