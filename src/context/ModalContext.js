import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idBebida, guardarIdBebida] = useState();
  const [bebidaDetalle, guardaBebida] = useState(null);
  const [modal, guardarModal] = useState([]);

  useEffect(() => {
    const obtenerBebida = async () => {
      if (!idBebida) {
        guardaBebida(null);
        return;
      }
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`;

      const resultado = await axios.get(url);
      guardaBebida(resultado.data.drinks[0]);
    };
    obtenerBebida();
  }, [idBebida]);

  return (
    <ModalContext.Provider value={{ guardarIdBebida, bebidaDetalle }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
