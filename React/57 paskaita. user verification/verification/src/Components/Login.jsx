import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

const Login = () => {

  const { users, setLoggedinUser } = useContext(UserContext);

  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: ''
  })

  const [failedLogIn, setFailedLogin] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs); //kokie laukai uzpildyti
    console.log(users) // visi kurti vartotojai

    const loggedInUser = users.find(user => user.userName === formInputs.userName && user.password === formInputs.password) //prisijunges vartotojas pagal jo duomenis

    if(loggedInUser){ 
      setLoggedinUser(loggedInUser) 
    } else {
      setFailedLogin(true)
    }
  }




  return ( 
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
          type="text"
          name='userName'
          value={formInputs.userName}
          onChange={(e)=>setFormInputs({...formInputs, userName:e.target.value})}
          />
        </label>
        <label>
          Password:
          <input type="password"
          name='password'
          value={formInputs.password}
          onChange={(e)=>setFormInputs({...formInputs, password:e.target.value})}
          />
        </label>

        <input type="submit" />
        {
          failedLogIn && <span>Wrong username or password</span>
        }
      </form>
    </div>
    </>
   );
}
 
export default Login;