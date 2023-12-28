import logo from './logo.svg';
import './App.css';
import Card from './pages/card';
import Navbar from './component/navbar';
import AllRoutes from './allRoutes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
