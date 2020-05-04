import React from 'react'
import Gasto from './Gasto'

function Listado( {gastos}  ) {
    return (
        <div className="card" >
             <h4 className="card-header text-info text-center" > Listado  </h4>
            <div className=" card card-body" >
            {gastos.map(gasto => (

                <Gasto
                key={gasto.id}
                gasto={gasto}

                />

            ))}
            </div>
           
            
        </div>
    )
}

export default Listado
