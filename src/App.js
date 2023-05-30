import './App.css';
import Counter from './Counter';
import {
  BrowserRouter as Router, Route,
  Routes
} from 'react-router-dom';
import Todolist from './pages/ToDo/TodoList';
import Calculator from './pages/Calculator/Calculator';
import FetchFilmData from './pages/FetchData/fetchFilmData';
import Timer from './pages/Timer/Timer';
import DisplayArrayData from './pages/DisplayArrayData/DisplayArrayData'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Counter />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/FetchData" element={<FetchFilmData />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Timer" element={<Timer />} />
        <Route path="/Display" element={<DisplayArrayData />} />

      </Routes>

    </Router>
  );

}

export default App;
