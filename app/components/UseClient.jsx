import React, { useEffect } from "react";

const UseClient = () => {
  useEffect(() => {
    alert("cargando");
  }, []);
  return <div>UseClient</div>;
};

export default UseClient;
