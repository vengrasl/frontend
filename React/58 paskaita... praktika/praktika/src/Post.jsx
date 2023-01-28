const Post = ({data}) => {
  return ( 
    <div className="singleMealContainer">
      <div className="singleMeal">
        <img className="mealImage" src={data.image} alt="meal-img" />
        <h1 className="mealTitle">{data.title}</h1>
        <p className="mealDescription">{data.description}</p>
      </div>
    </div>
   );
}
 
export default Post;