import './App.css';
import Knygos from "./components/Knygos";
import { useState, useEffect } from "react";
import PostForm from './components/PostForm';
import SignIn from './components/SignIn';


const App = () => {

  const [data, setData] = useState(null); 

  const fetchData = async () => {
    const duomenys = await fetch('http://localhost:5000/knygos')
      .then(res => res.json());
    console.log(duomenys);
    setData(duomenys);
  }

  useEffect(()=>{
    fetchData();
  }, []);


  return (
    <>
    <header>
      <img className='headerLogo' src="https://media.istockphoto.com/id/1130660569/vector/vector-logo-concept-of-a-book-club-with-people-reading.jpg?s=612x612&w=0&k=20&c=D-7acU7woXwbKii_XEWtTz-SegmYcU02D-0O7Tqh4KY=" alt="header-logo" />
      <SignIn/>
    </header>

    <PostForm 
    data={data}
    setData={setData}
     />
     
    <main>
      { data?
        data.map(item =>
          <Knygos
            key={item.id}
            knygos={item}
            setData={setData} 
          />
        ):
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/> }

      </main>
    </>
  );
}

export default App;