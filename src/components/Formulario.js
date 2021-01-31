import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { BebidasContext } from "../context/BebidasContext";

export default function Formulario() {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);
  const { buscarBebidas, guardarConsultar } = useContext(BebidasContext);

  const obtenerDatosBedida = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        guardarConsultar(true);
        buscarBebidas(busqueda);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosBedida}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosBedida}
          >
            <option value="">-- Selecciona Categoría --</option>

            {categorias.map((categoria, index) => (
              <option key={index} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
}
