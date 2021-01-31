import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BebidasContext = createContext();

const BebidasProvider = (props) => {
  const [bebidas, guardarBebidas] = useState([]);
  const [busqueda, buscarBebidas] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, guardarConsultar] = useState(false);

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerBebidas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

        const resultado = await axios.get(url);
        guardarBebidas(resultado.data.drinks);
      };
      obtenerBebidas();
    }
  }, [busqueda]);

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        buscarBebidas,
        guardarConsultar,
      }}
    >
      {props.children}
    </BebidasContext.Provider>
  );
};

export default BebidasProvider;
