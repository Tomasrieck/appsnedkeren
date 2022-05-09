import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import Bestil from "./components/pages/Bestil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestil" element={<Bestil />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
