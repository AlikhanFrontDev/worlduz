import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Poland from "./pages/Poland";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="poland" element={<Poland />} />
        {/* <Route path="" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
