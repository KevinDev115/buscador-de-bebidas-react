import React from "react";

const Bebida = ({ bebida }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{bebida.strDrink}</h2>
        <img
          className="card-img-top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <div className="card-body">
          <button type="button" className="btn btn-block btn-primary">
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};
export default Bebida;
