import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skeleton from "../layouts/Skeleton";
import Landing from "../pages/landing/Landing";
import NavPaths from "../utilities/NavPaths";
const Tour = lazy(() => import("../pages/tour/Tour"));
const Examples = lazy(() => import("../pages/examples/Examples"));
//const Landing = lazy(() => import("../pages/landing/Landing"));

function App() {
  return (
    <Suspense>
      <BrowserRouter basename={NavPaths.Base.path}>
        <Routes>
          <Route element={<Skeleton />}>
            <Route index element={<Landing />} />
            <Route path={NavPaths.Tour.path} element={<Tour />} />
            <Route path={NavPaths.Examples.path} element={<Examples />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
