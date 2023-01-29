import UserContext from "../context/UserContext";
import { useContext } from "react";
import UserCard from "./UserCard";

const ManageUsers = () => {

  const { users, banOrUnbanUser } = useContext(UserContext);

  const nonAdminUsers = users.filter(user => user.role !== 'admin');

  return ( 
    <section className="manageUsers">
      <h1>All users</h1>
    
      {
        nonAdminUsers.map(user => 
          <UserCard
            key={user.id} 
            data={user}
            banOrUnbanUser={banOrUnbanUser}
          />
        )
      }

    </section>
   );
}
 
export default ManageUsers;