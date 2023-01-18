import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import GeneratedTasks from './components/GeneratedTasks';
import './App.css';



const App = () => {

  //atliekant uzduoti reikia stebeti kokia ivesta reiksme ir visas ivestas reiksmes:
  const [singleTask, setSingleTask] = useState(''); // kintamasis, kuris zymi vienios uzduoties reiksme. ji perduodama Form komponentui ir yra vedama i forma, kaip value. setSingleTask yra funkcija, kuri iskvieciama formos onChange metu. Tuomet ji keicia singleTask reiksme
  
  const [tasks, setTasks] = useState([]); // kintamasis, kuris priims tasku masyva. SetTasks leis pakeisti sia reiksme

  const [uncompletedTasks, setUncompletedTasks] = useState(0) //state, kuris stebes kiek uzduociu yra nealiktos

  return (
    <>
    <Header
    uncompletedTasks={uncompletedTasks} //perduodam uncompleted tasks skaicu i headeri
    />

    <Form 
      singleTask={singleTask}
      setSingleTask={setSingleTask}
      tasks={tasks}
      setTasks={setTasks}
      uncompletedTasks={uncompletedTasks}
      setUncompletedTasks={setUncompletedTasks}
    />

    </>
  );
}

export default App;
