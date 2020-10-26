import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const isSearched = searchTerm => item => {
  return item.title.toLowerCase().includes(searchTerm.toLowerCase());
};

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: DEFAULT_QUERY,
      result: null,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onDismiss = (i) => {
    const isNotId = item => item.objectID !== i;
    const updatedHits = this.state.result.hits.filter(isNotId);

    this.setState({
      //result: Object.assign({}, this.state.result, { hits: updatedHits })
      result: {...this.state.result, hits: updatedHits}
    });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  setSearchTopStories = (result) => {
    //console.log(result);
    this.setState({ result });
  }

  fetchSearchTopStories = (searchTerm) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  render() {
    const { searchTerm, result } = this.state;
    if (!result) { return null; }

    return (
      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm} 
            SearchChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        {
          result
          &&
            <Table
              list={result.hits}
              pattern={searchTerm}
              onDismiss={this.onDismiss}
            />
        }
      </div>
    );
  }
}

class Search extends React.Component {
  componentDidMount() {
    if(this.input) {
      //this.input.focus();
    }
  }

  render() {
    const { value, SearchChange, onSubmit ,children } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={SearchChange} 
          ref={(node) => {this.input = node}}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    );
  }
}

// 無狀態組件(functional stateless components)
// const Search = ({ value, SearchChange, children }) => {
//   return (
//     <form>
//       {children}
//       <input type="text" value={value} onChange={SearchChange} />
//     </form>
//   )
// }


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
