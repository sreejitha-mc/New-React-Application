import './App.css';
import Counter from './Counter';
import {
  BrowserRouter as Router, Route,
  Routes
} from 'react-router-dom';
import Todolist from './pages/TodoList';
import Calculator from './pages/Calculator';
import FetchFilmData from './pages/fetchFilmData';

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
