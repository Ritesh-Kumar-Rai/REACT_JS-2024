const INITIAL_VALUES = {
  name: "",
  email: "",
  country: "",
  quantity: 0,
};

const ACTIONS = {
  CHANGE_VALUE: "CHANGE_VALUE",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
};

const form_reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_VALUE:
      return { ...state, ...action.payload };
    case ACTIONS.INCREMENT_QUANTITY:
      return { ...state, quantity: state.quantity + 1 };
    case ACTIONS.DECREMENT_QUANTITY:
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};

export { INITIAL_VALUES, ACTIONS, form_reducer };
