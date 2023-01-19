import { useParams } from "react-router-dom";

const Card = ({data}) => {
  const { id } = useParams();

  const duomenys = data.find(element => element.id === Number(id));

  //styled-components stilizavimas
  // i git npm i styled-components
  //suluzta viskas kai naudoji si stiliu

  return (
      <>
          <h1>Šios kortelės pavadinimas yra: {duomenys.tekstas}</h1>
          <p>Šios kortelės id yra: {duomenys.id}</p>
      </>
  );
}
 
export default Card;