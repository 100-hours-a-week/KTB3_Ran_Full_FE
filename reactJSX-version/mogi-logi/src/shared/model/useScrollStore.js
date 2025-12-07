export function useScrollStore() {
  const saveScroll = () => {
    sessionStorage.setItem("home_scrollY", String(window.scrollY));
  };

  const savePageIndex = (index) => {
    sessionStorage.setItem("home_pageIndex", index);
  };

  const getSavedState = () => {
    return {
      scrollY: Number(sessionStorage.getItem("home_scrollY")) || 0,
      pageIndex: Number(sessionStorage.getItem("home_pageIndex")) || 0,
    };
  };

  return { saveScroll, savePageIndex, getSavedState };
}
