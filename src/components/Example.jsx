import React from 'react'

const Example = ({mean}) => {
  return (
    <div style={{marginBottom:'20px'}}>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def=>(
            <div key={def.example}>
               { def.example ?  <li>{def.example}</li> : '' }
            </div>
        ))))}
    </div>
  )
}

export default Example