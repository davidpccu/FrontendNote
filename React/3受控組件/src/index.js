import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["stoner", "jhon", "fuck", "stone"],
      searchTerm: "受控組件"
    };
  }

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={searchTerm}
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.searchTerm}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
