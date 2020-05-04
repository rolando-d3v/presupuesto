import React from 'react'

function Error({mensaje}) {
    return (
        <div>
           <p className="alert-danger alert text-center text-danger h5" > {mensaje} </p>
            
        </div>
    )
}

export default Error
