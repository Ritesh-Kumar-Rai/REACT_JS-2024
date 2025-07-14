import { useEffect, useReducer, useState } from 'react'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import './App.css';
import { ThemeToggleBtn } from './components/ThemeToggleBtn';
import { ThemeToggleContextProvider } from './contexts/ThemeToggleContext';
import { ACTIONS, init, INITIAL_VALUE, reducer } from './store/newsRecucerStore';
import { isExists } from './utils/utility';

// custom error
class NewsError extends Error {
  constructor(message) {
    super(message);
    this.name = "NewsError"
  }
}

function App() {

  const [news_state, dispatch] = useReducer(reducer, INITIAL_VALUE, init);
  const localStorage_se_aaya_article_list = localStorage.getItem("mini-news-app");
  const [bookmarked, setBookmarked] = useState(JSON.parse(localStorage_se_aaya_article_list) || []);

  // bookmarking function
  const doBookmarking = (id) => {
    try {
      if (!id || id.length <= 3) {
        throw new NewsError("Failed to Bookmark your article.. Sorry!");
      }

      const matched_article = news_state.news.find((article) => article.publishedAt === id) || {};

      if (matched_article) {
        setBookmarked(prev => {
          localStorage.setItem("mini-news-app", JSON.stringify([...prev, matched_article]));
          return [...prev, matched_article];
        });
      } else {
        throw new NewsError("The article which you are trying to bookmark is not available now!");
      }

    } catch (error) {
      console.error(`${error.name} -> ${error.message}`);
    }

  };



  useEffect(() => {
    const controller = new AbortController();

    const fetchNews = async () => {
      try {
        dispatch({ type: ACTIONS.FETCH_START });
        const api_url = "https://saurav.tech/NewsAPI/everything/cnn.json";
        const response = await fetch(api_url, { signal: controller.signal });
        if (!response.ok) {
          throw new NewsError("Failed fetching data from News API!");
        }
        const res = await response.json();
        console.log(res)
        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: res?.articles
        });
      } catch (error) {
        if (error.name === "AbortError") {
          console.error("fetch aborted!");
          dispatch({ type: ACTIONS.FETCH_ERROR, payload: "Failed to Fetch News.. !" });
        } else if (error instanceof NewsError) {
          const err_msg = `${error.name} -> ${error.message}`;
          dispatch({ type: ACTIONS.FETCH_ERROR, payload: err_msg });
        } else {
          const err_msg = `${error.name} -> ${error.message}`;
          console.error(err_msg);
          dispatch({ type: ACTIONS.FETCH_ERROR, payload: err_msg });
        }
      }
    };

    dispatch({ type: ACTIONS.FETCH_START });

    const timer = setTimeout(() => {
      console.warn(news_state.news);
      if (navigator.onLine) {
        if (confirm("Yay! You are online wants to get new articles?")) {
          fetchNews();
          return;
        }
        dispatch({ type: ACTIONS.FETCH_ERROR, payload: "Something Strange happened with user🤪" });
      } else {
        const isCon = confirm("Oops! It seems like you are offline, can i check and get your bookmarked articles?");


        if (isCon) {
          const bookmarked_articles = JSON.parse(localStorage.getItem("mini-news-app"));
          if (!bookmarked_articles || bookmarked_articles.length === 0) {
            dispatch({
              type: ACTIONS.FETCH_ERROR,
              payload: "You haven't saved any articles and you offline too! What can we do!! ?"
            });
          } else {
            dispatch({
              type: ACTIONS.FETCH_SUCCESS,
              payload: bookmarked_articles
            });
          }
        } else {
          dispatch({ type: ACTIONS.FETCH_ERROR, payload: "User stopped app.." });
        }

      }
    }, 4000);

    return () => {
      clearTimeout(timer);
      controller.abort();
    }
  }, []);

  return (
    <>
      <ThemeToggleContextProvider>
        <ThemeToggleBtn />
      </ThemeToggleContextProvider>

      <h1>News Mini App</h1>

      {news_state.loading && <div>
        <h1 className='loading-header'>LOADING... PLEASE WAIT FOR A WHILE</h1>
      </div>}
      {(news_state.error) && <span style={{ color: 'red' }}>{news_state.error}</span>}
      <main>
        {/* news card */}
        {news_state.news.map((each_article, index) => {
          return (<div key={index} className='news-card'>
            <div className='img-container'>
              <img src={each_article.urlToImage} alt={each_article.title} width="100%" aria-label={each_article.title} />
              <button type='button' onClick={() => doBookmarking(each_article.publishedAt)}>{isExists(each_article.publishedAt, bookmarked) ? <FaBookmark color='gold' /> : <FaRegBookmark />}</button>
            </div>
            <div className='info-container'>
              <h3>{each_article.title}</h3>
              <div><span>By {each_article.author}</span> <span>Published At: {each_article.publishedAt}</span></div>
              <p>{each_article.description}</p>
              <a href={each_article.url} type='button' role='link' target='_blank'>Read more</a>
            </div>
          </div>);
        })}
      </main>
    </>
  )
}

export default App
