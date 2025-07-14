const INITIAL_VALUE = {
  news: [],
  loading: false,
  error: null,
};

const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

// lazy-initialisation of state at initial_stage
const init = (prev_state) => {
  if (navigator.onLine) {
    return prev_state;
  }
  if (confirm("You are offline! Can i get your bookmarked news offline?")) {
    const bookmarked_news = JSON.parse(localStorage.getItem("mini-news-app"));
    if (bookmarked_news.length === 0) {
      return prev_state;
    } else {
      return { ...prev_state, news: bookmarked_news };
    }
  }
  return prev_state;
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return { ...state, loading: true, error: null };
    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, news: action.payload };
    case ACTIONS.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { INITIAL_VALUE, ACTIONS, reducer, init };
