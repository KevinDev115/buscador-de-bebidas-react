import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaBebidas from "./components/ListaBebidas";

import CategoriasProvider from "./context/CategoriasContext";
import BebidasProvider from "./context/BebidasContext";

export default function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>

          <ListaBebidas />
        </div>
      </BebidasProvider>
    </CategoriasProvider>
  );
}
