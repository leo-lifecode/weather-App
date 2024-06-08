import { useEffect } from "react";

export const useAnyWindow = (showBar, setShowBar) => {
    useEffect(() => {
        const handleclickwindow = (e) => {
          const arrow = document.querySelector(".arrow-down");
          const searchBox = document.querySelector(".search-box");
          if (
            showBar &&
            !arrow.contains(e.target) &&
            !searchBox.contains(e.target)
          ) {
            setShowBar(false);
          }
        };
        window.addEventListener("click", handleclickwindow);
        return () => {
          window.removeEventListener("click", handleclickwindow);
        };
      }, [showBar]);
}
    