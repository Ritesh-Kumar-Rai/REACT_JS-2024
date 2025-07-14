// store for reducer
const INITIAL_VALUE = {
  isLoading: false,
  joke_data: {
    type: "",
    setup: "",
    punchline: "",
  },
  isError: "",
};

const ACTIONS = {
  FETCH_STARTED: "FETCH_STARTED",
  FETCH_COMPLETED: "FETCH_COMPLETED",
  ERROR_FAILED: "ERROR_FAILED",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_STARTED:
      return {
        isLoading: true,
        joke_data: state,
        isError: false,
      };
    case ACTIONS.FETCH_COMPLETED:
      return {
        isLoading: false,
        joke_data: action.payload,
        isError: false,
      };

    case ACTIONS.ERROR_FAILED:
      return {
        isLoading: false,
        joke_data: {},
        isError: action.payload,
      };

    default:
      return state;
  }
};

export { INITIAL_VALUE, ACTIONS, reducer };
