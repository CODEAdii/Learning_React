/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //note here we take user not setUser we dont need method here,so we take data only which we need
     const {user} = useContext(UserContext)
    //we will  use conditional return
     if (!user) return <div>Please Login</div>

     return <div>Welcome  {user.username.toUpperCase()}!</div>
}

export default Profile