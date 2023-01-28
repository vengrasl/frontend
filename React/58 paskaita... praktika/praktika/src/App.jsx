import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './Header';
import Register from './Register'
import Main from './Main';


const App = () => {
  
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<h1>404 not found</h1>} />
    </Routes>

    </>
  );
}

export default App;
