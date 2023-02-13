import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Poland from "./pages/Poland";
import SinglePage from "./pages/SinglePage";
import "./App.css";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="poland" element={<Poland />} />
        <Route path="single" element={<SinglePage />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
