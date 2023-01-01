const MediaQueries = (() => {
  const minWidth640px = window.matchMedia("(min-width: 640px)");

  minWidth640px.onchange = () => {
    window.location.reload();
  };

  const minWidth1536px = window.matchMedia("(min-width: 1536px)");

  minWidth1536px.onchange = () => {
    window.location.reload();
  };

  return { minWidth640px, minWidth1536px };
})();

export default MediaQueries;
