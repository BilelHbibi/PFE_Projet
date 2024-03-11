import React from "react";
import "./../../style/backForAll.css";

const BackForAll = (props) => {
  return (
    <>
      <div className="back">
        <img src={props.img} alt="" />
        <div className="over"></div>
        <div className="content2">{props.text}</div>
      </div>
    </>
  );
};

export default BackForAll;
