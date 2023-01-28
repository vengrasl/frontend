import UserContext from "./UserContext";
import { useContext } from "react";
import UserCard from "./UserCard";

const ManageUsers = () => {

  const { users } = useContext(UserContext);

  const nonAdminUsers = users.filter(user => user.role !== 'admin');

  return ( 
    <>
    
      {
        nonAdminUsers.map(user => 
          <UserCard
            key={user.id} 
            data={user}
          />
        )
      }

    </>
   );
}
 
export default ManageUsers;