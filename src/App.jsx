import Garden from "./Garden";
import Manifesto from "./Manifesto";
import "./app.scss";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/garden" element={<Garden />} />
        <Route path="manifesto" element={<Manifesto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
