import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

function Formulario({ setGasto, setCrearGasto }) {

  const [nombregasto, setNombreGasto] = useState("");
  const [cantidadgasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);

    // Cuando se agrega el gasto
  const handleSubmit = e => {
    e.preventDefault();

    if(cantidadgasto < 1 || isNaN(cantidadgasto) || nombregasto === '') {
      setError(true);
      return;

    } else {

      const gasto = {
        nombregasto,
        cantidadgasto,
        id: shortid.generate()
      };
      //pasar el gasto al componente principal
      setGasto(gasto);
      setCrearGasto(true)

      //eliminar alerta
      setError(false)

      //resetear formulario
      setNombreGasto('')
      setCantidadGasto('')


    }
  };

  return (
    <div className="card">
      {error ? (<Error mensaje={"cantidad no valida"} />) : null}
      <h5 className="card-header text-info text-center">
        {" "}
        Agrega tus Gastos Aqui
      </h5>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de Gasto</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setNombreGasto(e.target.value)}
            value={nombregasto}
          />
        </div>
        <div className="form-group">
          <label>Cantidad de Gasto</label>
          <input
            type="number"
            className="form-control"
            onChange={e => setCantidadGasto(parseInt(e.target.value, 10))}
            value={cantidadgasto}
          />
        </div>
        <small className="form-text text-muted">
          Cuidado con lo que Gastas
        </small>
        <button type="submit" className="btn btn-primary mt-3">
          Enviar presupuesto
        </button>
      </form>
    </div>
  );
}

export default Formulario;
