import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header';
import Home from "./routes/Home";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
