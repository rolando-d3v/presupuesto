import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [ restante, setRestante] = useState(0)
  const [preguntarpresupuesto, setPreguntarPresupuesto] = useState(true);
  const [ crearGasto, setCrearGasto] = useState(false)
  const [gasto, setGasto] = useState({})
  const [gastos, setGastos] = useState([])


useEffect(() => {
    if(crearGasto){
      const  listadoGastos = [...gastos, gasto];
    setGastos(listadoGastos)

    // restar  el presupuesto
    const presupuestoRestante = restante - gasto.cantidadgasto
    setRestante(presupuestoRestante)

    // ojo una vez que se agrega ponerlo como false
      setCrearGasto(false)
    }

}, [crearGasto,gasto,gastos,restante])


  return (

    <div className="container">
      <h1 className="text-light text-center my-4"> Presupuesto </h1>
      <div className="row">
        <div className="col">
          <div>
            <div>
              {preguntarpresupuesto ? (
                <Pregunta
                  setPreguntarPresupuesto={setPreguntarPresupuesto}
                  setPresupuesto={setPresupuesto}
                  setRestante={setRestante}
                />
              ) : (
                <div className="row">
                  <div className="col-6" >
                    <Formulario 
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}/>
                  </div>
                  <div className="col-6">
                    <Listado gastos={gastos}/>
                    <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
