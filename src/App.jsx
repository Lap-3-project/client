import { Route, Routes } from "react-router-dom";

import { Home, NotFound, Quiz } from "./pages";
import { DataProvider } from "./context/dataContext";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
