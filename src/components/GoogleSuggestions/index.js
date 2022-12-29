// Write your code here
import './index.css'

const GoogleSuggestions = props => {
  const {userDetails, deleteUser} = props
  const {suggestion, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="para-div">
      <p className="para">{suggestion}</p>
      <button onClick={onDelete} type="button" className="arrow-button">
        <img
          className="arrow-image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default GoogleSuggestions
