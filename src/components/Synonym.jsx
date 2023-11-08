import React from 'react'

const Synonym = ({ mean }) => {
    return (
        <div>
            {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
                return def.synonyms
                    ?.map(syn => (
                        
                        <li> {syn}  </li>
                    ))
            })))}
        </div>
    )
}

export default Synonym