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
      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm} 
            SearchChange={this.onSearchChange}
          >
            Search
          </Search>
          <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
        </div>
      </div>
    );
  }
}

// class Search extends React.Component {
//   render() {
//     const { value, SearchChange, children } = this.props;
//     return (
//       <form>
//         {children}
//         <input type="text" value={value} onChange={SearchChange} />
//       </form>
//     );
//   }
// }

// 無狀態組件(functional stateless components)
const Search = ({ value, SearchChange, children }) => {
  return (
    <form>
      {children}
      <input type="text" value={value} onChange={SearchChange} />
    </form>
  )
}


class Table extends React.Component {
  render() {
    const { list, pattern, onDismiss } = this.props;

    const largeColumn = {
      width: '40%',
    };
    const midColumn = {
      width: '30%',
    };
    const smallColumn = {
      width: '10%',
    };

    return (
      <div className="table">
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID} className="table-row" >
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={midColumn}>
              {item.author}
            </span>
            <span style={smallColumn}>
              {item.num_comments}
            </span>
            <span style={midColumn}>
              {item.points}
            </span>
            <span style={largeColumn}>
              <button 
                onClick={() => onDismiss(item.objectID)} 
                className="button-inline"
                type="button"
              >
                Dismiss
              </button>
              <Button 
                onClick={() => onDismiss(item.objectID)} 
                className="button-inline"
              >
                Button
              </Button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    const {
      onClick,
      className='',
      children
    } = this.props;

    return (
      <button 
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
