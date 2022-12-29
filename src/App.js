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
  state = {searchInput: '', initialList: suggestionsList}

  getSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = id => {
    const {initialList} = this.state
    const filteredUserList = initialList.filter(each => each.id !== id)
    this.setState = {initialList: filteredUserList}
  }

  render() {
    const {searchInput, initialList} = this.state

    const serachResults = initialList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="mian-div">
        <div className="sub-div">
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
                onChange={this.getSearchList}
                className="Search-Google"
                placeholder="Search Google"
                type="search"
              />
            </div>
            <ul className="unorder-list">
              {serachResults.map(eachUser => (
                <GoogleSuggestions
                  deleteUser={this.deleteUser}
                  userDetails={eachUser}
                  key={eachUser.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
