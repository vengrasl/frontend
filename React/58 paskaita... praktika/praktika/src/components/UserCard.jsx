const UserCard = ({data, banOrUnbanUser}) => {
  return ( 
    <div className="userCard">
      <h1>{data.username}</h1>
      <img src={data.avatar} alt="userLogo" />
      
      <button onClick={() => banOrUnbanUser(data.id)}>
        {data.isBanned ? 'UnBan' : 'Ban'}
      </button>
    </div>
   );
}
 
export default UserCard;