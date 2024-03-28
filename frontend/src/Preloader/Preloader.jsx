import React, { useEffect, useState } from "react";
import "./preloader.css";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  return (
    <>
      {/* Start preloader */}
      <div class="loader-wrap">
        <div class="preloader">
          <div className="preloader-close" onClick={() => setIsVisible(false)}>
            x
          </div>
          <div id="handle-preloader" class="handle-preloader">
            <div class="animation-preloader">
              <div class="spinner2"></div>
              <div class="txt-loading">
                <span data-text-preloader="B" class="letters-loading">
                  B
                </span>
                <span data-text-preloader="T" class="letters-loading">
                  T
                </span>
                <span data-text-preloader="S" class="letters-loading">
                  S
                </span>
                &nbsp;&nbsp;&nbsp;
                <span data-text-preloader="b" class="letters-loading">
                  b
                </span>
                <span data-text-preloader="a" class="letters-loading">
                  a
                </span>
                <span data-text-preloader="n" class="letters-loading">
                  N
                </span>
                <span data-text-preloader="k" class="letters-loading">
                  k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End preloader */}
    </>
  );
};

export default Preloader;
