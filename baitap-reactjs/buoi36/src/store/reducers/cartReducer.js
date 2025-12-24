const initialState = {
  items: [],
  showCart: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_CART":
      return {
        ...state,
        showCart: true,
      };

    case "CLOSE_CART":
      return {
        ...state,
        showCart: false,
      };
    case "ADD_TO_CART":
      const oldItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (oldItem >= 0) {
        const updatedItems = [...state.items];
        updatedItems[oldItem] = {
          ...updatedItems[oldItem],
          quantity: updatedItems[oldItem].quantity + 1,
        };
        return { 
          ...state,
          items: updatedItems 
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { 
                ...item,
                quantity: item.quantity + 1
              }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { 
                ...item,
                quantity: item.quantity - 1 
              }
            : item
        ),
      };

    default:
      return state;
  }
};