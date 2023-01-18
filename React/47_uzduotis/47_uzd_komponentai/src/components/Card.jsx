const Card = (props) => {
  return ( 
    <div className="cardContainer">
      <h1 className="cardName">{props.name}</h1>
      <img className="cardImage" src={props.image} alt={props.imageAlt} />
      <p className="cardText">{props.text}</p>
    </div>
   );
}
 
export default Card;