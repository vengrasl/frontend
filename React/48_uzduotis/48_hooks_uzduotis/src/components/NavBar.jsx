import userIcon from "./images/userIcon.jpg"

const NavBar = (props) => {

  const signOut = () => {
    props.atsijungti(false)
  }

  return (
    <>
      <div className="userInfo">
        <img className="userIcon" src={userIcon} alt="user-logo" />
        <p>Tree Chopper 3000</p>
        <p>In Total added trees for chopping: <span>{props.markedCount}</span></p>
        <button onClick={signOut}>Sign out</button>
      </div>
    </>
   );
}
 
export default NavBar;
