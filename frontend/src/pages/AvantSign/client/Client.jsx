import React from "react";
import { useSelector } from "react-redux";

const Client = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <>
     <h1>client</h1>
    </>
  );
};

export default Client;
