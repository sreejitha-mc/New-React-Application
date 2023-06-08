import './App.css';

import MainRoutes from './Routes/Routes';
import Sidebar from './components/Sidebar';
import './pages/Dashboard/Dashboard.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainRoutes />
    </div>
  );
}
export default App;
