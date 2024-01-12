import './App.css'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import PassRender from './components/PassRender'

const App = () => {
  const [passM, setPassM] = useState([])
  const [boxCheck, setBoxCheck] = useState(false)
  const [searchIn, setSearchIn] = useState('')
  const [cred, setCred] = useState({
    id: uuidv4(),
    website: '',
    username: '',
    password: '',
  })

  const doThis = event => {
    event.preventDefault()
    setPassM([...passM, cred])
    setCred({id: uuidv4(), website: '', username: '', password: ''})
  }

  const delThing = id => {
    setPassM(prevState => prevState.filter(each => each.id !== id))
  }

  const searchResults = passM.filter(each =>
    each.website.toLowerCase().includes(searchIn),
  )

  const count = searchResults.length
  const passExist = count > 0

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
      />
      <div>
        <form onSubmit={doThis}>
          <h1>Add new Password</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              onChange={event =>
                setCred({...cred, website: event.target.value})
              }
              placeholder="Enter Website"
              value={cred.website}
            />
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              onChange={event =>
                setCred({...cred, username: event.target.value})
              }
              placeholder="Enter Username"
              value={cred.username}
            />
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              onChange={event =>
                setCred({...cred, password: event.target.value})
              }
              placeholder="Enter Password"
              type="password"
              value={cred.password}
            />
          </div>

          <button type="submit">Add</button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
        />
      </div>

      <div>
        <div>
          <h1>Your Passwords</h1>
          <p>{count}</p>
        </div>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input
            type="search"
            onChange={event => setSearchIn(event.target.value)}
            placeholder="search"
          />
        </div>

        <hr />

        <input
          type="checkbox"
          id="checkBox"
          onChange={event => setBoxCheck(event.target.checked)}
        />
        <label htmlFor="checkBox">Show Passwords</label>

        {passExist ? (
          <ul>
            {searchResults.map(each => (
              <PassRender
                det={each}
                boxCheck={boxCheck}
                key={each.id}
                delThing={delThing}
              />
            ))}
          </ul>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p>no Passwords</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
