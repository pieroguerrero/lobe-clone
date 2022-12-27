import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Tour = lazy(() => import("../pages/tour/Tour"));
import Skeleton from "../layouts/Skeleton";
import Landing from "../pages/Landing";
import NavPaths from "../utilities/NavPaths";

function App() {
  return (
    <Suspense>
      <BrowserRouter basename={NavPaths.Base}>
        <Routes>
          <Route element={<Skeleton />}>
            <Route index element={<Landing />} />
            <Route path={NavPaths.Tour} element={<Tour />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
