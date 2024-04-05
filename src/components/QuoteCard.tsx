import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, rootState } from '../state/store'
import { generateQuote } from '../state/quote/quote'



function QuoteCard() {
    const quoteData = useSelector((state: rootState) => state.quote.quote);
    const dispatch = useDispatch<AppDispatch>();
    const handleGenerateQuote = () => {
        dispatch(generateQuote());
      };
      const quote = quoteData ? quoteData.quote : '';
      const author = quoteData ? quoteData.author : '';
    return (
             <div id="quote-box">
        <div className="quote-text">
         <i className="ri-double-quotes-l"> </i><span id="text">{quote}</span>
        </div>
        <div className="quote-author">- <span id="author">{author}</span></div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href={`https://twitter.com/intent/tweet?text="${quote}" Quote by: ${author}`}

          >
            <i className="ri-twitter-x-fill"></i>
          </a>
          <button className="button"  onClick={handleGenerateQuote} id="new-quote">New quote</button>
        </div>
      </div>
    )
}

export default QuoteCard;
