import React, { useContext } from "react";
import { BebidasContext } from "../context/BebidasContext";

import Bebida from "./Bebida";

export default function ListaBebidas() {
  const { bebidas } = useContext(BebidasContext);

  return (
    <div className="row mt-5">
      {bebidas.map((bebida) => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </div>
  );
}
