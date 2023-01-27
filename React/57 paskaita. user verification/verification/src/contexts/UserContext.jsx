import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState();

  const [users, setUsers] = useState([
    {
      id: 0,
      level: 'admin',
      userName: 'PetrasDidysis',
      password: '123',
      avatar: 'https://cdn-icons-png.flaticon.com/512/3305/3305427.png'
    }, {
      id: 1,
      level: 'user',
      userName: 'Petriukas',
      password: '456',
      avatar: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'
    }, {
      id: 2,
      level: 'user',
      userName: 'Jonukas',
      password: '789',
      avatar: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
    }
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;