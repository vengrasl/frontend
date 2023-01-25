import { createContext } from "react"
import { useState } from "react";

const UserContext = createContext(); 

const UserProvider = ({ children }) => {
  //kilnojami dalykai eina cia
  
  const [users, setUsers] = useState([
    {
      id: 0,
      level: 'admin',
      userName: 'Petras Didysis',
      password: 'meRuleEmALL123',
      avatar: 'data:image/png;base64,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'
    },{
      id: 1,
      level: 'user',
      userName: 'Petriukas',
      password: 'VeryBigSecret999',
      avatar: 'data:image/png;base64,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'
    },{
      id: 2,
      level: 'user',
      userName: 'Jonukas',
      password: 'somePassword',
      avatar: 'data:image/jpeg;base64,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'
    }
  ])
 
  return (
    <UserContext.Provider
     value = {{
      users
    }}
  >
      {children}
    </UserContext.Provider>
  );
}



export { UserProvider }
export default UserContext;