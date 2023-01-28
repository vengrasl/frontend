const UserCard = ({data}) => {
  return ( 
    <div>
      <img src={data.avatar} alt="userLogo" />
      <p>{data.username}</p>
    </div>
   );
}
 
export default UserCard;