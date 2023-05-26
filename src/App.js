import './App.css';
import Counter from './Counter';
import {
  BrowserRouter as Router, Route,
  Routes
} from 'react-router-dom';
import Todolist from './pages/ToDo/TodoList';
import Calculator from './pages/Calculator/Calculator';
import FetchFilmData from './pages/FetchData/fetchFilmData';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Counter />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/FetchData" element={<FetchFilmData />} />
        <Route path="/Calculator" element={<Calculator />} />

      </Routes>

    </Router>
  );

}

export default App;
