import { Outlet } from "react-router-dom";
import MediaQueries from "../utilities/MediaQueries";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Skeleton() {
  return (
    <div className=" flex h-full  min-h-screen  w-full flex-col items-center">
      <Header isMobile={!MediaQueries.minWidth640px.matches} />
      <Outlet />
      <Footer />
    </div>
  );
}
