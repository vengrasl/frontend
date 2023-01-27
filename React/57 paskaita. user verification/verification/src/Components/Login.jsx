import UserContext from "../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

  const [formInputs, setFormInputs] = useState({
    userName : '',
    password : ''
  });
  const [failedLogIn, setFailedLogIn] = useState(false);

  const navigation = useNavigate();

  const { users, setLoggedInUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = users.find(user => user.userName === formInputs.userName && user.password === formInputs.password);

    if(loggedInUser){
      setLoggedInUser(loggedInUser);
      navigation('/');
    } else {
      setFailedLogIn(true);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            UserName:
            <input type="text" name="userName"
              value={formInputs.userName}
              onChange={(e)=>setFormInputs({...formInputs, userName:e.target.value})}
            />
          </label>
          <label>
            Password:
            <input type="password" name="password"
              value={formInputs.password}
              onChange={(e)=>setFormInputs({...formInputs, password:e.target.value})}
            />
          </label>
          <input type="submit" value="Log In" />
          {
            failedLogIn && <span>Wrong log in info</span>
          }
        </form>
      </div>
    </>
  );
}
 
export default LogIn;