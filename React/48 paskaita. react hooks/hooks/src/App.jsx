import './App.css';
import { useState, useEffect } from 'react';
import SmallText from './components/SmallText';


const App = () => {

  //SU NUOTAIKA
  const [geraNuotaika, setGeraNuotaika] = useState(true) //gera nuotaika = true, o setGera nuotaika yra funkcija
  
  const handleGeraNuotaika = () => {
    setGeraNuotaika(!geraNuotaika) // funkcija pavers true i false. Bet console rodys atvirksciai
  }

  useEffect(() => {
    console.log("Keičiama nuotaika");
  }, [geraNuotaika]); //nurodyti i ka reikia reaguoti. Pvz suvedus login, norim, kad isliktu header, footer, bbet pasikeistu body esanti info

 


  //SU CLICK COUNT
  const [clickCount, setClickCount] = useState(0) //clickCount = 0, o setClick yra funkcija

  useEffect(() => {
    console.log('Keičiamas click count');
  }, [clickCount]);




  //SU KOMPONENTAIS
  const [turiAugintini, setTuriAugintini] = useState(true)

  const handleTuriAugintini = () => {
    setTuriAugintini(!turiAugintini);
  }

  useEffect(() => {
    console.log('istrinamas/pridedamas klausimas apie augintini');
  }, [turiAugintini])


  return (
    <>
      <h1>Labas rytas</h1>
      <button onClick={handleGeraNuotaika}>Nuotaikos reguliatorius</button>
      <p>Šiandien yra {geraNuotaika ? 'gražus' : 'bjaurus'} rytas</p> 
      { !geraNuotaika &&
        <small>Eik pamiegok daugiau</small> 
      }

      <br />
      <br />
      <br />

      <h1>Daug žmonių myli gyvūnus</h1>
      <button onClick={handleTuriAugintini}>Augintinio reguliatorius</button>
      <p>Aš pats {turiAugintini ? 'turiu augintinį' : 'neturiu augintinio'}</p>
      { turiAugintini &&
        <SmallText 
        text = 'Ar nori sužinoti, kokį augintinį turiu?'
        clickCount = {clickCount}
        setClickCount = {setClickCount}
        />
      }   

    </>
  );
}

export default App;
