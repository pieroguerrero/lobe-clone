import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Skeleton from "../layouts/Skeleton";

import Overview from "../pages/overview/Overview";
import NavPaths from "../utilities/NavPaths";
const ComingSoon = lazy(() => import("../pages/ComingSoon"));
const Tour = lazy(() => import("../pages/tour/Tour"));
const Examples = lazy(() => import("../pages/examples/Examples"));

function App() {
  return (
    <Suspense>
      <BrowserRouter basename={NavPaths.Base.path}>
        <Routes>
          <Route element={<Skeleton />}>
            <Route index element={<Overview />} />
            <Route path={NavPaths.Tour.path} element={<Tour />} />
            <Route path={NavPaths.Examples.path} element={<Examples />} />
            <Route path={NavPaths.Blog.path} element={<ComingSoon />} />
            <Route path={NavPaths.Help.path} element={<ComingSoon />} />
            <Route path={NavPaths.Soon.path} element={<ComingSoon />} />
          </Route>
          <Route
            path={NavPaths.Unknown.path}
            element={<Navigate replace={true} to={NavPaths.Root.path} />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
