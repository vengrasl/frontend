import UserContext from "../context/UserContext";
import PostContext from "../context/PostContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Post = ({data}) => {
  
const { users, loggedInUser } = useContext(UserContext);

const { deletePost } = useContext(PostContext);

//randam kuris postas kuriam vartotojui priklauso prilyginant vartotojo id ir posto savininko id
const postOwner = users.find(user => user.id === data.userId);


  return ( 

      <div className="singleMealContainer">
        
        {
          <div className="postOwner">
          <p>This post belongs to user: {postOwner.username}</p>
          <img src={postOwner.avatar} alt="user avatar" />
          </div>
        }
        
        <div className="singleMeal">
          <img className="mealImage" src={data.image} alt="meal-img" />
          <h1 className="mealTitle">{data.title}</h1>
          <p className="mealDescription">{data.description}</p>
          <div>

          {//jei vartotojas prisijunges ir vartotojo id sutampa su posto savininko id, atsiranda edit galimybe
            loggedInUser && loggedInUser.id === postOwner.id &&
            <>
              <button onClick={()=> deletePost(data.id)}>Delete</button>
              <Link to={`/editPost/${data.id}`}>
                <button> Edit</button>
              </Link>
            </>
          }
            
          </div>
        </div>
      </div>
   );
}
 
export default Post;