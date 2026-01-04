const initialState = {
  showModal: false,
  showLoading: false,
  name: localStorage.getItem("name") || null, 
  token: localStorage.getItem("access_token") || null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        showModal: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        showModal: false,
      };
      
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
      };
    case "LOGOUT":
      localStorage.removeItem("access_token");
      localStorage.removeItem("name");
      return {
        ...state,
        token: null,
        name: null,
      };

    default:
      return state;
  }
};