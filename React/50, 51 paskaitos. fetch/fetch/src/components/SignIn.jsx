import { useState } from "react";

const SignIn = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false); //by default vartotojas neprisijunges

  const [username, setUsername] = useState(''); //koks vartotojas prisijunges

  //vedamos reiksmes i prisijungimo inputus
  const [userLogin, setUserLogin] = useState({
    username:'',
    password:''
  });

  const [invalidUsernameOrPassword, setInvalidUsernameOrPassword] = useState(''); //state, kuris bus naudojamas, jei bus neteisingai ivesti prisijungimo duomenys

  const login = (username) => { 
    setIsLoggedIn(true); // keis isLoggedIn reiksme. po prisijungimo pavers i true
    setUsername(username);      // keis username reiksme, kad butu aisku po sekmingo prisijungimo koks varototjas prisijunges 
  }

  const logout = () => {    
    setIsLoggedIn(false);     //po Log out out keis isLoggedIn reiksme i false
    setUsername('');               // pasalins prisijungusio varotojo varda is DOM
  }
  


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
        login(userLogin.username); //atpazinsim prisijungusi varotoja pagal jo username
      } else{
        setInvalidUsernameOrPassword('Invalid username or password. Try again'); //jei
      }
      setUserLogin({username:'',password:''})
  }

  return (
    <>
    { !isLoggedIn ? //jei neprisijunges
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
        :  // kitu atveju pasisveikinti su prisijungusiu vartotoju pagal jo varda ir rodyti log out mygtuka
          <div className='logOut'>
            <p>Welcome back {username}!</p> 
            <button className='logOffButton' onClick={logout}>Log out</button>
          </div> 
        }
        
      
    </>
   );
}
 
export default SignIn;