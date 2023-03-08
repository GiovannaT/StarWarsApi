import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Films from "./pages/Films";
import NoPage from "./pages/NoPage";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/films" element={<Films/>} />
        <Route path="/species" element={<Species />} /> 
        <Route path="/planets" element={<Planets />} />
        {/* <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/starships" element={<Starships />} />  */}
        <Route path="/characters" element={<Characters/>} />
      </Routes>
    </Router>
  );
}

export default App;
