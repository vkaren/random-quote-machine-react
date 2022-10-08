import React from "react";

function Buttons(props) {
  const href = `https://www.twitter.com/intent/tweet?hashtags=quotes&text="${props.quote}" ${props.author}`;
  return (
    <div className="buttons">
      <a
        id="tweet-quote"
        href={href}
        target="_blank"
        rel="noreferrer"
        style={props.styleButtons.styleTweet}
        onFocus={props.onMouseOver}
        onMouseOver={props.onMouseOver}
        onBlur={props.onMouseOut}
        onMouseOut={props.onMouseOut}
      >
        <img src={props.styleButtons.srcImg} alt="twitter" />
      </a>
      <button
        id="new-quote"
        style={props.styleButtons.styleNewQuote}
        onClick={props.quoteRequest}
        onFocus={props.onMouseOver}
        onMouseOver={props.onMouseOver}
        onBlur={props.onMouseOut}
        onMouseOut={props.onMouseOut}
      >
        New Quote
      </button>
    </div>
  );
}

export default Buttons;
