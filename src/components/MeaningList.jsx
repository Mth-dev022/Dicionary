import React from 'react'
import styles from './MeaningList.module.css'

const MeaningList = ( {mean} ) => {
    console.log(mean)

  return (
    
    <div className={styles.container}>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def=>(
            <div key={def.definition}>
                <li>{def.definition}</li>
            </div>
        ))))}
    
    </div>
  )
}

export default MeaningList