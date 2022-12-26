import { Outlet } from "react-router-dom";

export default function Skeleton() {
  return (
    <div className="flex flex-col h-full min-h-screen ">
      {/* Header */}
      <Outlet />
      {/* Footer */}
    </div>
  );
}
