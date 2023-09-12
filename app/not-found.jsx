import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Pagina no encontrada</p>
      <Link href='/'>Volver</Link>
    </>
  );
};

export default notfound;
