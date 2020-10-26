import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    //this.onClickMe = this.onClickMe.bind(this);
    this.state = {
      list: [1, 2, 3]
    };
  }

  onClickMe = () => {
    console.log(this);
  };

  onDismiss = i => {
    console.log(i);
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClickMe}>
          Click me
        </button>

        <button onClick={() => this.onDismiss("1")} type="button">
          Dismiss
        </button>
        {this.state.list.map(item => {
          const hello = () => this.onDismiss(item);
          return (
            <div>
              <button type="button" onClick={hello}>
                {item}
              </button>
              <button type="button" onClick={() => this.onDismiss(item)}>
                {item}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
