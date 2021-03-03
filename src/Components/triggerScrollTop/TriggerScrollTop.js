import React, { useLayoutEffect, useState } from "react";

const BtnScrollUp = () => {
  const [isBtnVisible, setBtnVisibility] = useState(false);

  useLayoutEffect(() => {
    const handleBtnVisibility = () => {
      if (window.scrollY > 160) {
        setBtnVisibility(true);
      } else {
        setBtnVisibility(false);
      }
    };

    window.addEventListener("scroll", handleBtnVisibility);

    return () => window.removeEventListener("scroll", handleBtnVisibility);
  }, []);

  return (
    <button
      type="button"
      className={isBtnVisible ? "trigger-scrollTop state-active" : "trigger-scrollTop"}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <i className="fas fa-angle-up fa-2x"></i>
      <span>ПОЧЕТОК</span>
    </button>
  );
};

export default BtnScrollUp;
