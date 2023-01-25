import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

const Login = () => {

  const { users } = useContext(UserContext);

  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs); //kokie laukai uzpildyti
    console.log(users) // visi kurti vartotojai

    const loggedIn = users.find(user => user.userName === formInputs.userName && user.password === formInputs.password) //login

    console.log(loggedIn); //kuris vartotojas logged in


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
      </form>
    </div>
    </>
   );
}
 
export default Login;