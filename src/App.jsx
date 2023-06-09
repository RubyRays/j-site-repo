import Nav from "./Navbar";
import './App.css';
import Home from './Home';
import About from './About';
import Languages from "./Languages";
import Status from "./Status";
import Contact from "./Contact";
import GameList from "./GameList";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App"> 
         
      <header className="App-header">
        
      <Nav/>
      <Home/>
      <About/>
      <Languages/>
      <Status/>
      <button>View Resume</button>
      <GameList/>
      <Contact/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
