import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const isSearched = searchTerm => item => {
  if (searchTerm === "") {
    return;
  }
  return item.title.toLowerCase().includes(searchTerm.toLowerCase());
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          objectID: 1,
          url: "//",
          title: "stoner",
          author: "stoner",
          num_comments: "123",
          points: "ABC"
        },
        {
          objectID: 2,
          url: "//",
          title: "jhon",
          author: "jhon",
          num_comments: "456",
          points: "ABC"
        },
        {
          objectID: 3,
          url: "//",
          title: "stone",
          author: "stone",
          num_comments: "789",
          points: "ABC"
        },
        {
          objectID: 4,
          url: "//",
          title: "fuck",
          author: "fuck",
          num_comments: "000",
          points: "ABC"
        }
      ],
      searchTerm: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onDismiss = i => {
    console.log(i);
  };

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search value={searchTerm} SearchChange={this.onSearchChange} />
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    const { value, SearchChange } = this.props;
    return (
      <form>
        <input type="text" value={value} onChange={SearchChange} />
      </form>
    );
  }
}

class Table extends React.Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => onDismiss(item.objectID)} type="button">
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
