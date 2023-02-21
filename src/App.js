import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Poland from "./pages/Poland";
import SinglePage from "./pages/SinglePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="countries/:id/university" element={<Poland />} />
        <Route path="countries/:id/university/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}
export default App;
