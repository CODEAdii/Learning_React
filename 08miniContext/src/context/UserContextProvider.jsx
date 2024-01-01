/* eslint-disable react/prop-types */
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    
   const [user,setUser]=React.useState(null)
   //----[var-,method-]-----
   return(
    <UserContext.Provider value = {{user,setUser}}>
    {children}
    </UserContext.Provider>
   )
}


export default UserContextProvider



/*      UserContext.Provider and value: The UserContext.Provider component is a part of React's Context API.
   It takes a value prop, and any component inside its subtree can access this value. In this case, the value prop is
   set to an object containing the user state and the setUser function. 

       {children}: This is a special prop in React that refers to the content between the opening
   and closing tags of a component. In the context of a Provider, it represents the components that are
   wrapped by the Provider.                 */