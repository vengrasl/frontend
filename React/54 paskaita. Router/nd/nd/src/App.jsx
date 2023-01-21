import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav';


const App = () => {

  return (
    <>

    <Nav />
    
    <Routes>

      <Route path="/" element= {<Home />}/>

      <Route path="/add" element= {<Add />}/>

      <Route path="/edit" element= {<Edit />}/>
    
      <Route path="/*" element={<h1>404 not found</h1>}/>

    </Routes>

    </>
  );
}

export default App;
