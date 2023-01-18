import { useState } from "react";

  

  const Card =  (props)=> {

  const [checked, setChecked] = useState(false)

  function handleChecked(){
    setChecked(!checked)
    props.updateMarkedTreesCount(checked)
  }

  return (
    <>
    <div className = {checked? "TreeChecked" : "TreeNotChecked" }>
      <h1>{props.title}</h1>
      <img className="cardImg" src={props.image} alt={props.imageAlt} />
      <p>{props.cardDescription}</p>
    </div> 
    <div className="inputCheck">
    <input type="checkbox" onChange={handleChecked} /> 
    {checked ? <p>Tree added to chop chop wishlist</p> : <p>Add this tree for chop chop wishlist</p>}
    </div>
    </>
    
  
   );
}
 
export default Card;