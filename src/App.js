import Home from "./pages/Home/Home";
import "./app.css"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<Search/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
