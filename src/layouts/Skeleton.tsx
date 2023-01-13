import { lazy, Suspense, useMemo } from "react";
import { Outlet } from "react-router-dom";
import MediaQueries from "../utilities/MediaQueries";
const Footer = lazy(() => import("./Footer/Footer"));
import Header from "./Header/Header";
const ToastContainer = lazy(() =>
  import("react-toastify").then((module) => ({
    default: module.ToastContainer,
  }))
);

export default function Skeleton() {
  const isMinWidth640px = useMemo(() => MediaQueries.minWidth640px.matches, []);
  return (
    <div className=" flex h-full  min-h-screen w-full  flex-col items-center">
      <Header isMobile={!isMinWidth640px} />
      <Outlet />
      <Suspense>
        <Footer />
      </Suspense>

      <ToastContainer />
    </div>
  );
}
