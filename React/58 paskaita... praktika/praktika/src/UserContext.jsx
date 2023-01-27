import { useState} from "react";
import { createContext } from "react";
import { useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  //kuris vartotojas prisijunges
  const [loggedInUser, setLoggedInUser] = useState('');
  
  //visi user
  const [users, setUsers] = useState([])

  
  useEffect(()=>{
    const userData = async () => {
      const res = await fetch('http://localhost:5000/users');
      const userData = await res.json();
      setUsers(userData)
    }
    userData()
  }, []);

  


  return (
    <UserContext.Provider 
    value= {{
      users,
      loggedInUser,
      setLoggedInUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider};
export default UserContext;