import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Counsel from "./counsel/Counsel"
import Adviser from "./adviser/Adviser"
import Directions from "./direction/Directions";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/directions" element={<Directions />} />
                <Route path="/adviser" element={<Adviser />} />
                <Route path="/" element={<Counsel />} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
