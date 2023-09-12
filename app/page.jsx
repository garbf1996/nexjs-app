"use client";
import UseClient from "./components/UseClient";

export default function Home() {
  const metedata = {
    title: "Mi pagina especial home",
  };
  return (
    <section>
      <h1>Hola mundo</h1>
      <button
        onClick={() => {
          alert("hola garber");
        }}
      >
        Enviar
      </button>
      <UseClient />
    </section>
  );
}
