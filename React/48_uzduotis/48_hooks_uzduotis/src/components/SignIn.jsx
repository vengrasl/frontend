import { useState } from "react";

const SignIn = (props) => {

  

  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  });

  const handleUserInput = (e) => {
    switch(e.target.name){
      case 'username':
        setUserLogin({
          ...userLogin,
          username: e.target.value
        })
        break;
      case 'password':
        setUserLogin({
          ...userLogin,
          password: e.target.value
        })
        break;
      
      default:
        console.log('error');
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(userLogin.username === "medkirtys" && userLogin.password === "slaptazodis"){
      // console.log('tesingai suvesti prisijungimo duomenys');
      props.prisijungti(true)
      //{(userLogin.username !== "medkirtys" || userLogin.password !== "slaptazodis") ? <p >neteisingai suvesti prisijungimo duomenys</p> : ""} kodel rodo iskart?
    }
  }

  return ( 
    <>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Norėdami prisijungti, įveskite reikiamus duomenis</label>
        <div>
        <input 
          type="text"
          name="username"
          value={userLogin.username}
          onChange={handleUserInput}
          placeholder="username"
        />
        <input 
          type="password" 
          name="password"
          value={userLogin.password}
          onChange={handleUserInput}
          placeholder="password"
        />
        </div>
        <input className="logIn" type="submit" value="Log in"/>
      </form>

    </>
   );
}
 
export default SignIn;