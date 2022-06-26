import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "./Pages/Error404";
import HomeLoader from "./Components/PageLoader/HomeLoader";
const Home = React.lazy(() => import("./Pages/Home"));
const Pokemon = React.lazy(() => import("./Pages/Pokemon"));

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<HomeLoader />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="pokemon/:id/*"
          element={
            <React.Suspense fallback={<p>loading</p>}>
              <Pokemon />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
