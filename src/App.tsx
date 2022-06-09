import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import Error404 from "./Pages/Error404";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
