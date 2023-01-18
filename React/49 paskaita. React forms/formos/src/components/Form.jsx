import { useState } from "react";
import { nanoid } from 'nanoid'

const Form = () => {

  // const [vardas, setVardas] = useState('');
  // const [pavarde, setPavarde] = useState('');

  const [formosLaukai, setFormosLaukai] = useState({vardas: '', pavarde: ''})

  const daro = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(formosLaukai.vardas)
    console.log(formosLaukai.pavarde)
  }

  const handleInputChange = (e) => { //jei yra komponentai, perduodam handleInputChange
    console.log(e.target.name);
    switch(e.target.name){
      case 'vardas':
        setFormosLaukai({
          ...formosLaukai,
          vardas: e.target.value,
        })
        break;
      case 'pavarde':
        setFormosLaukai({
          ...formosLaukai,
          pavarde: e.target.value
        })
        break;  
      
      default:
        console.log('kazka keitem')
    }
  }

  return ( 
    <>
      <form onSubmit={daro}>
        <label>
          Name:
          <input type="text" name="vardas" value={formosLaukai.vardas} onChange={handleInputChange}/>
        </label> <br />
        <label>
          Surname:
          <input type="text" name="pavarde" value={formosLaukai.pavarde} onChange={handleInputChange}/>
        </label> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
   );
}
 
export default Form;