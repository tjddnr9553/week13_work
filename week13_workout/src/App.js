import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Link to="/">home</Link>  |  
        <Link to="/list">메모목록</Link>  |  
        <Link to="/add">글작성</Link>  |  
    </Routes>
  );
}

export default App;
