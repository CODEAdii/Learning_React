
import './App.css'
import UserContextProvider from './context/UserContextProvider'

import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1>React with Chai </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
