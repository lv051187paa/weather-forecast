import React from 'react';

const Preloader = () => (
  <div className="preloader-layout">
    <div id="loader">
      <div className="cloud">
        <div className="cloud-base">
          <div className="cloud-small-part"></div>
          <div className="cloud-big-part"></div>
        </div>
      </div>
      <div className="sun">
        <div className="sun-beams1"></div>
        <div className="sun-beams2"></div>
        <div className="sun-beams3"></div>
        <div className="sun-beams4"></div>
        <div className="sun-beams5"></div>
        <div className="sun-beams6"></div>
      </div>
      <div className="teardrops">
        <div className="teardrop1">
          <svg width="80%" viewBox="0 0 30 42">
            <path fill="lightblue" stroke="lightblue" strokeWidth="1.5"
                  d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"/>
          </svg>
        </div>
        <div className="teardrop2">
          <svg width="80%" viewBox="0 0 30 42">
            <path fill="lightblue" stroke="lightblue" strokeWidth="1.5"
                  d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
)

export default Preloader;
