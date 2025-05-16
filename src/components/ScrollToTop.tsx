
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Handle normal page changes with smooth scrolling
  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [pathname, hash]);

  // Handle anchor links with smooth scrolling
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToTop;
