import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Counsel from "../counsel/Counsel"
import Adviser from "../adviser/Adviser"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/adviser" element={<Adviser />}>
          </Route>
          <Route path="/" element={<Counsel />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
