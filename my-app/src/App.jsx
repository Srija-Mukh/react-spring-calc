import './App.css';
import Calculator from './components/Calculator.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Calculator/>}></Route>
    </Routes>
    </BrowserRouter></>
  );
}

export default App;
