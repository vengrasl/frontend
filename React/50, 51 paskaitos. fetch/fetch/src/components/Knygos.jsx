import { useState } from "react";

const Knygos = ({ knygos, setData }) => {

  //state, kuris ziuri ar knyga istrinta
  const [isDeleted, setIsDeleted] = useState(false);
  
  //state, kuris ziuri ar editinama knyga
  const [isEditing, setIsEditing] = useState(false);

  //state, kuris ziuri i pradines visu knygu info
  const [updatedBook, setUpdatedBook] = useState({...knygos});


  const handleDelete = async () => {
    await fetch(`http://localhost:5000/knygos/${knygos.id}`, {
      method: 'DELETE'
    });
    //paspaudus delete mygtuka, isDeleted state keiciasi i true, ir is data.json issitrina info
    setIsDeleted(true);
  }

  // kortele trinama is DOM. Kitu atveju reikia page refresh
  if (isDeleted) {
    return null;
  }

  //po edit mygtuko paspaudimo, keiciam edit state i true
  const handleEdit = () => {
    setIsEditing(true);
  }


  const saveChanges = async () => {
    const response = await fetch(`http://localhost:5000/knygos/${knygos.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedBook), //i uzklausa deti visa info, kaip objekta apie knyga
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonData = await response.json();
    setData(prevData => prevData.map(item => item.id === knygos.id ? jsonData : item)); //map per buvusia knygos info pagal id ir pakeisti ja nauja, jei ta info buvo keista
    setIsEditing(false); //isjungiam edit
  }

  return (
    <div className="knygos">
      <h1 
        className="pavadinimas" 
        contentEditable={isEditing} //po edit paspaudimo, keiciam edit state i true
        //event kuris klauso kokia yra ivestis, kviecia setUpdatedBook, kuris nuskaito buvusia info
        onInput={(e) => setUpdatedBook({...updatedBook, title: e.target.innerText})}>  
        {knygos.title}
      </h1>

      <img className="nuotrauka" src={knygos.image} alt="knygos-nuotrauka"/>

      <div className="knygosInformacija">
        <p className="autorius" contentEditable={isEditing} 
        onInput={(e)=> setUpdatedBook({...updatedBook, author: e.target.innerText})}>
        Knygos autorius:{knygos.author}
        </p>

        <p className="aprasymas" contentEditable={isEditing} 
        onInput={(e) => setUpdatedBook({...updatedBook, description: e.target.innerText})}>
         Knygos aprašymas: {knygos.description}
        </p>

        <p className="puslapiuSkaicius" contentEditable={isEditing} 
        onInput={(e) => setUpdatedBook({...updatedBook, pages: e.target.innerText})}>
         Puslapių skaičius {knygos.pages}
        </p>

        {isEditing?
        <button onClick={saveChanges}>Save</button> : <button onClick={handleEdit}>Edit book info</button>  
        }
        
        <button onClick={handleDelete}>Delete book</button>

      </div>
    </div>
   );
}

export default Knygos;