import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import "./common.css";
import "./common";
import Schedule from "./pages/Schedule";
import Sticker from "./pages/Sticker";
import Calendar from "./pages/Calendar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sticker" element={<Sticker />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
