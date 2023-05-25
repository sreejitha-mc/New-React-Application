import './App.css';
import Counter from './Counter';
import {
  BrowserRouter as Router, Route,
  Routes
} from 'react-router-dom';
import Todolist from './pages/TodoList';
import FetchFilmData from './pages/FetchFilmData';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Counter />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/FetchData" element={<FetchFilmData />} />
      </Routes>

    </Router>
  );

}

export default App;
