import './App.css';
import Counter from './Counter';
import {
  BrowserRouter as Router, Switch, Route,
  BrowserRoutes,
  Routes
} from 'react-router-dom';
import Todolist from './TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Counter />} />
        <Route path="/todo" element={<Todolist />} />
      </Routes>

    </Router>
  );

}

export default App;
