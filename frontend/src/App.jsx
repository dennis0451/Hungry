import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import UserPage from './pages/UserPage'
import { HashRouter, Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'


const getCSRFToken = ()=>{
  let csrfToken

  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(';')
  for ( let cookie of cookies ) {
      // individual cookies have their key and value separated by an equal sign
      const crumbs = cookie.split('=')
      if ( crumbs[0].trim() === 'csrftoken') {
          csrfToken = crumbs[1]
      }
  }
  return csrfToken
}
console.log('token? ', getCSRFToken())
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()


function App() {

  const [user, setUser] = useState(null)


  const logOut = function(event){
    event.preventDefault()
    axios.post('/logout').then((response)=>{
      console.log('response from server: ', response)
      whoAmI()
    })
  }
  console.log(`App.jsx user online: ${user != undefined}`)


  const whoAmI = async () => {
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    // const user = response.data[0].fields
    console.log('user from whoami? ', user, response)
    setUser(user)
  }

  useEffect(()=>{
    whoAmI()
  }, [])





  return (
    <div className="App">
      {user && <button onClick={logOut}>Logout</button>}
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path='' element={<HomePage user={user}/>}/>
          <Route path='/login' element={<LoginPage user={user} />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/userpage' element={<UserPage />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
