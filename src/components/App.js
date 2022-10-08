import React from "react";
import Buttons from "./Buttons";
import getColor from "../colors";

class App extends React.Component {
  state = {
    quote: "",
    author: "",
    color: "#00252a",
    styleButtons: {
      styleTweet: {
        background: "#00252a",
        border: "1px solid #00252a",
        color: "inherit",
      },
      styleNewQuote: {
        background: "#00252a",
        border: "1px solid #00252a",
        color: "inherit",
      },
      srcImg: "https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png",
    },
  };
  componentDidMount() {
    this.quoteRequest();
  }
  quoteRequest = () => {
    const request = new Request(
      "https://api.api-ninjas.com/v1/quotes?category=happiness",
      {
        method: "GET",
        headers: { "X-Api-Key": "4dEzgSto2zo43ABrKvUW6A==o7A75RTGhyvznf0m" },
      }
    );
    fetch(request)
      .then((res) => res.json())
      .then(
        (result) => {
          const color = getColor();
          this.setState({
            quote: result[0].quote,
            author: result[0].author,
            color,
            styleButtons: {
              styleTweet: { background: color, border: "1px solid" + color },
              styleNewQuote: { background: color, border: "1px solid" + color },
              srcImg:
                "https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png",
            },
          });
        },
        (error) => console.log(error, "error")
      );
  };

  onMouseOver = (event) => {
    let styleTweet = this.state.styleButtons.styleTweet;
    let styleNewQuote = this.state.styleButtons.styleNewQuote;
    let srcImg = this.state.styleButtons.srcImg;

    if (event.target.id === "new-quote") {
      styleNewQuote = { background: "white", color: this.state.color };
    } else {
      styleTweet = { background: "white", color: this.state.color };
      srcImg = `https://img.icons8.com/ios-glyphs/30/${this.state.color.slice(
        1
      )}/twitter--v1.png`;
    }
    this.setState({ styleButtons: { styleTweet, styleNewQuote, srcImg } });
  };

  onMouseOut = (event) => {
    let styleTweet = this.state.styleButtons.styleTweet;
    let styleNewQuote = this.state.styleButtons.styleNewQuote;
    let srcImg = this.state.styleButtons.srcImg;

    if (event.target.id === "new-quote") {
      styleNewQuote = {
        background: this.state.color,
        border: "1px solid" + this.state.color,
      };
    } else {
      styleTweet = {
        background: this.state.color,
        border: "1px solid" + this.state.color,
      };
      srcImg = `https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png`;
    }
    this.setState({ styleButtons: { styleTweet, styleNewQuote, srcImg } });
  };

  render() {
    return (
      <div
        id="machine"
        style={{ background: this.state.color, color: this.state.color }}
      >
        <div className="box">
          <div className="quote-box">
            <p id="text">{this.state.quote}</p>
            <h2 id="author">{this.state.author}</h2>
            <Buttons
              quote={this.state.quote}
              author={this.state.author}
              color={this.state.color}
              styleButtons={this.state.styleButtons}
              quoteRequest={this.quoteRequest}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
