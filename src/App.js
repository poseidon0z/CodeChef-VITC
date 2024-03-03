import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './Styles/App.css';
import Home from './Pages/Home';
import Join from './Pages/Join';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinus" element={<Join />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
