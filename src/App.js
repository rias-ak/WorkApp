import './App.css';
import { Routes, Route } from 'react-router-dom';
import Addnotes from './Components/Addnotes';
import Navbar from './Components/Navbar';
import Allnotes from './Components/Allnotes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Addnotes /> }/>             
        <Route path="/allnotes" element={ <Allnotes /> }/>   
      </Routes>
    </div>
  );
}

export default App;
