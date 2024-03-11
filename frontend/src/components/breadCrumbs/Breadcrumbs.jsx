import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const activeIndex = pathnames.length - 1;
  
  return (
    <div className="crumbs">
      {/* Add the "Home" link at the beginning */}
      <span className="crumb">
        <Link to="/" className="inactive">Accueil</Link>
      </span>
      {pathnames.map((path, index) => {
        const isActive = index === activeIndex;
        const decodedPath = decodeURIComponent(path); // Decode the path
        return (
          <React.Fragment key={index}>
            <span className="separator">&nbsp;{">"}&nbsp;</span>
            {index < activeIndex ? (
              <span className="crumb inactive">
                {decodedPath.replaceAll("-", " ")}
              </span>
            ) : (
              <span className="crumb">
                <Link to={"/" + path} className={isActive ? "active" : "inactive"}>
                  {decodedPath.replaceAll("-", " ")}
                </Link>
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
