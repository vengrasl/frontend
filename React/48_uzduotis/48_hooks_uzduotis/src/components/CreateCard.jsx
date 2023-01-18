import { useState } from "react";
import { nanoid } from "nanoid";

const CreateCard = ({addACard}) => {


  const [userCreateCard, setUserCreateCard] = useState({
    cardName: '',
    cardImage: '',
    cardDescription: '',
    treeAddedToList: false
  });

  const handleUserCreateCard = (e) => {
    switch(e.target.name){
      case 'cardName':
        setUserCreateCard({
          ...userCreateCard,
          cardName: e.target.value
        })
        break;
      case 'cardImage':
        setUserCreateCard({
          ...userCreateCard,
          cardImage: e.target.value
        })
        break;
      case 'cardDescription':
        setUserCreateCard({
          ...userCreateCard,
          cardDescription: e.target.value
        })
        break;

      default:
        console.log('error')  
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    addACard({
      cardName: userCreateCard.cardName,
      cardImage: userCreateCard.cardImage,
      cardDescription: userCreateCard.cardDescription,
      treeAddedToList: false,
      id: nanoid()
    });
  }


  return ( 
    <>
 
    <form onSubmit={handleSubmit}>

      <label>
        Title:
        <input 
        type="text"
        name="cardName"
        value={userCreateCard.cardName}
        onChange={handleUserCreateCard}
        />
      </label>

      <label>
        Image:
        <input
        type="url"
        name='cardImage'
        value={userCreateCard.cardImage}
        onChange={handleUserCreateCard}
        />
      </label>

      <label>
        Description:
        <input
        type="text" 
        name='cardDescription'
        value={userCreateCard.cardDescription}
        onChange={handleUserCreateCard}
        />
      </label>

      <input type="submit" value="post" />

    </form>
  
    
    </>
   );
}
 
export default CreateCard;