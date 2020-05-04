import React, { Fragment, useState } from "react";
import Error from './Error'

function Pregunta({setPresupuesto, setPreguntarPresupuesto, setRestante}) {
  
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setCantidad(parseInt(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
      
    } else {
      setError(false)
      setPresupuesto(cantidad)
      setRestante(cantidad)
      setPreguntarPresupuesto(false)
    }
  };

  return (
    <Fragment>
      { error ? (<Error mensaje={"Cantidad incorrecta"}  />) : null  }

      <form onSubmit={handleSubmit} className="card">
        <div className="card-header text-center text-primary h4">
          {" "}
          Coloca tu Presupuesto{" "}
        </div>
        <div className="card-body">
          <div className="form-group ">
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              placeholder="coloca tu presupuesto"
            />
          </div>
          <div className="form-group"></div>
          <button type="submit" className="btn btn-primary btn-block">
            Definir Presupuesto
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Pregunta;
