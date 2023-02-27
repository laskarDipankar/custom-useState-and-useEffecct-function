import React from "react";
import { useEffect } from "react";

const Functional = ({ counter }) => {
  useEffect(() => {
    console.log("Functional useEffect");

    return () => {
      console.log("Functional componentWillUnmount");
    };
  });
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default Functional;
