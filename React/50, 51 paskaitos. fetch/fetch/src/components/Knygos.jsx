import { useState } from "react";


const Knygos = ({ knygos }) => {
                                                      // DELETE
  //state, kuris ziuri ar knyga istrinta
  const [isDeleted, setIsDeleted] = useState(false);
  

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/knygos/${knygos.id}`, {
      method: 'DELETE'
    });
    //paspaudus delete mygtuka, isDeleted state keiciasi i true, ir is data.json issitrina info
    setIsDeleted(true);
  }

  //kortele trinama is DOM. Kitu atveju reikia page refresh
  if (isDeleted) {
    return null;
  }

  return ( 
    <div className="knygos">
      <h1 className="pavadinimas">{knygos.title}</h1>
      <img className="nuotrauka" src={knygos.image} alt="knygos-nuotrauka"/>
      <div className="knygosInformacija">
        <p className="autorius">Knygos autorius: {knygos.author}</p>
        <p className="aprasymas">Knygos aprašymas: {knygos.description}</p>
        <p className="puslapiuSkaicius">Puslapių skaičius: {knygos.pages}</p>
        <button>Edit book info</button>
        <button onClick={handleDelete}>Delete book</button>
      </div>
    </div>
   );
}

export default Knygos;




