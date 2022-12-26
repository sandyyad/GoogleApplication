// Write your code here

const GoogleSuggestions = props => {
  const {userDetails} = props
  const {suggestion} = userDetails

  return (
    <div>
      <p className="para">{suggestion}</p>
    </div>
  )
}

export default GoogleSuggestions
