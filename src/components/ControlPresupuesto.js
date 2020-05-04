import React, {Fragment} from 'react'
import {revisarPresupuesto} from './helpers'

function ControlPresupuesto({presupuesto, restante}) {
    return (
        <Fragment>
            <div className="alert alert-primary"  >
                presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante) }  >
                restante: $ {restante}
            </div>
            
        </Fragment>
    )
}

export default ControlPresupuesto
