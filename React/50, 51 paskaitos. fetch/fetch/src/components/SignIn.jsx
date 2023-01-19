import { useState } from "react";

const SignIn = ({ login }) => {

  //vedamos reiksmes i prisijungimo inputus
  const [userLogin, setUserLogin] = useState({
    username:'',
    password:''
  });

  const [invalidUsernameOrPassword, setInvalidUsernameOrPassword] = useState(''); //state, kuris bus naudojamas, jei bus neteisingai ivesti prisijungimo duomenys

  //keiciam vedamas reiksmes i prisijungimo inputus
  const handleUserInput = (e) => {
    switch(e.target.name){
      case 'username':
        setUserLogin({
          ...userLogin,
          username: e.target.value
        });
        break;
      case 'password':
        setUserLogin({
          ...userLogin,
          password: e.target.value
        });
        break;

      default:
        console.log('error');
    }
  }


  const handleSubmit = async e => { //po prisijungimo formos submit:
    e.preventDefault();

    const SignInData = await fetch('http://localhost:8000/userinfo') //fetch prsijungimo duomenu saugykla
      .then(res => res.json());

    const user = SignInData.find(user => user.username === userLogin.username && user.password === userLogin.password) //kuriam kintamaji, kuris tikrins, ar teisingi prisijungimo duomenys
    
      if(user){ //jei duomenys teisingi
        login(userLogin.username);
      } else{
        setInvalidUsernameOrPassword('Invalid username or password. Try again');
      }
  }

  return (
    <>
        <div className="logInDiv">
        <h3>Enter your username and password to Log in</h3>
        
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Username"
            type="text"
            name="username"
            value={userLogin.username}
            onChange={handleUserInput}
          />
          <input 
            placeholder="Password"
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleUserInput}
          />
          <input type="submit" value="Log In" className="logInButton"/>
        </form>
        {invalidUsernameOrPassword && <p className="wrongFields">{invalidUsernameOrPassword}</p>}
        </div>
      
    </>
   );
}
 
export default SignIn;