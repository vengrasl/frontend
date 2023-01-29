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

  const addNewUser = (newUser) => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data.newUser])
      })
  }

  
  const banOrUnbanUser = async (id) => {
    console.log('ivykis')

    //kuri user update
    const userToUpdate = users.find(user => user.id.toString() === id.toString());
  
    userToUpdate.isBanned = !userToUpdate.isBanned;
  
    const updatedUser = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userToUpdate)
    })
      .then(res => res.json())
      .then(data => data);
  
    setUsers(users.map(user => user.id.toString() === id.toString() ? { ...user, ...updatedUser } : user));
  };
  


  return (
    <UserContext.Provider 
    value= {{
      users,
      loggedInUser,
      setLoggedInUser,
      addNewUser,
      banOrUnbanUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider};
export default UserContext;