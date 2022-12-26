import {Component} from 'react'
import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class App extends Component {
  state = {searchInput: ''}

  render() {
    const {searchInput} = this.state

    return (
      <div className="mian-div">
        <img
          className="main-image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
        />
        <div className="bottom-div">
          <div className="searchApplication">
            <img
              className="size"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
            />
            <input
              className="Search-Google"
              placeholder="Search Google"
              value={searchInput}
              type="text"
            />
          </div>
          <ul className="unorder-list">
            {suggestionsList.map(eachUser => (
              <GoogleSuggestions userDetails={eachUser} key={eachUser.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
