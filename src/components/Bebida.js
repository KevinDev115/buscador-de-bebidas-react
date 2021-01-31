import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Bebida = ({ bebida }) => {
  // Configuracion del modal
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { guardarIdBebida, bebidaDetalle } = useContext(ModalContext);

  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {informacion[`strMeasure${i}`]} - {informacion[`strIngredient${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

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
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdBebida(bebida.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>

          <Modal
            open={open}
            onClose={() => {
              guardarIdBebida(null);
              handleClose();
            }}
          >
            <>
              {bebidaDetalle && (
                <div style={modalStyle} className={classes.paper}>
                  <h2>{bebidaDetalle.strDrink}</h2>
                  <h3 className="mt-4">Instrucciones</h3>
                  <p>{bebidaDetalle.strInstructions}</p>

                  <img
                    className="img-fluid my4"
                    src={bebidaDetalle.strDrinkThumb}
                    alt={`Imagen de bebida ${bebidaDetalle.strDrink}`}
                  />

                  <h3>Ingredientes y Cantidades</h3>
                  <ul>{mostrarIngredientes(bebidaDetalle)}</ul>
                </div>
              )}
            </>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Bebida;
