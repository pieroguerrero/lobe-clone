import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skeleton from "../layouts/Skeleton";
import Landing from "../pages/Landing";
import NavPaths from "../utilities/NavPaths";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={NavPaths.Base}>
      <Routes>
        <Route element={<Skeleton />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
