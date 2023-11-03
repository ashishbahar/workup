import React from "react";

const Topbutton = () => {
    const [backTop, setBackTop] = React.useState(false);
  
    const moveToTop = () => {
      document.documentElement.scrollTop = 0;
    };
  
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
    return (
      <div>
        {backTop ? (
          <button
            onClick={moveToTop}
            className="position-fixed border-0 topbtn bottom-0 end-0 me-4 mb-4 rounded-circle pointer z-3"
          >
          <svg width="20" height="20" fill="white" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path><path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path></svg>
          </button>
        ) : (
          ""
        )}
      </div>
    );
  };
  
  export default Topbutton;
  