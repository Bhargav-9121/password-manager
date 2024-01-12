import '../App.css'

const PassRender = props => {
  const {det, delThing, boxCheck} = props
  const {id, username, website, password} = det

  const delBtn = () => {
    delThing(id)
  }

  return (
    <li>
      <h1>{website[0]}</h1>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {boxCheck ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button data-testid="delete" onClick={delBtn} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PassRender
