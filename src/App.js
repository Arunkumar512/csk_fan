import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Team from './component/Team';
import Home from './component/Home';
import Gallery from './component/Gallery';
import Wistlepodu from './component/Wistlepodu';
import Shop from './component/Shop';
import Csktv from './component/Csktv';
import Contact from './component/Contact';
import Social from './component/social';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Wistlepodu" element={<Wistlepodu />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Csktv" element={<Csktv />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Social/>
      </BrowserRouter>
    </div>
  );
}

export default App;
