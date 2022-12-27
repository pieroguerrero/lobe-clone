export default function DesktopHeader() {
  return (
    <header className="px-10">
      <div className="flex justify-between">
        <div>Logo</div>
        <nav className="flex justify-between gap-8">
          <div>Overview</div>
          <div>Examples</div>
          <div>Tour</div>
          <div>Blog</div>
          <div>Help</div>
        </nav>
        <button className=" w-[129px] h-12 rounded-3xl text-lg">Action</button>
      </div>
    </header>
  );
}
