import UserContext from "../contexts/UserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: '',
    passwordRepeat: '',
    avatar: ''
  });
  const [invalidUsername, setInvalidUsername] = useState(false);

  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(users.find(user => user.userName === formInputs.userName)){
      setInvalidUsername(true);
    } else {
      let newUser = {
        ...formInputs,
        id: Date.now(),
        level: 'user'
      };
      addNewUser(newUser);
      setLoggedInUser(newUser);
      navigation('/');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          User name:
          <input type="text" name="userName" value={formInputs.userName}
            onChange={(e) => setFormInputs({...formInputs, userName:e.target.value})}
          />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formInputs.password}
            onChange={(e) => setFormInputs({...formInputs, password:e.target.value})}
          />
        </label>
        <label>
          Repeat Password:
          <input type="password" name="passwordRepeat" value={formInputs.passwordRepeat}
            onChange={(e) => setFormInputs({...formInputs, passwordRepeat:e.target.value})}
          />
        </label>
        <label>
          User picture:
          <input type="url" name="avatar" value={formInputs.avatar}
            onChange={(e) => setFormInputs({...formInputs, avatar:e.target.value})}
          />
        </label>
        <input type="submit" value="Register" />
      </form>
      {
        invalidUsername && <span>User with such name already exists.</span>
      }
    </>
  );
}
 
export default Register;