import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const isSearched = searchTerm => item => {
  if (searchTerm === "") {
    return;
  }
  return item.toLowerCase().includes(searchTerm.toLowerCase());
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["stoner", "jhon", "fuck", "stone"],
      searchTerm: ""
    };
  }

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        <div>輸入文字： {this.state.searchTerm}</div>
        {this.state.list
          .filter(isSearched(this.state.searchTerm))
          .map(item => <div>{item}</div>)}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
