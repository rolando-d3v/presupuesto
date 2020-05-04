import React from 'react'

function Gasto( {gasto} ) {
    return (
        <div>
            <li>
                <p>
                    {gasto.nombregasto}
                    <span className=" text-primary"  >
                       $ {gasto.cantidadgasto}
                    </span>

                </p>
            </li>
            
        </div>
    )
}



export default Gasto
