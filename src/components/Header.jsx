import React from 'react';
import styles from './Header.module.css';
import { useState, useContext } from 'react';
import { inputContext } from '../App';

const Header = () => {

    const [value, setValue] = useState()

    const {inputValue, setInputValue} = useContext(inputContext)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        setInputValue(value)
        setValue("")
    }

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            setInputValue(value)
            setValue("")
        }
    }

    return (

        <div className={styles.header}>

            <div className={styles.container}>

                <h1>Simple Dictionary</h1>
                <p>Find definitions for a word</p>

            </div>

            <div className={styles.container2}>

                <input placeholder='Search'
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKey}
                    value={value} />

                <button onClick={handleSubmit}>Search</button>

            </div>

            <div className={styles.resultFor}>

                {inputValue && (
                <h3 className={styles.result}>Result for:
                <span className={styles.word}> {inputValue} </span> </h3> ) }

            </div>

        </div>
    );
}

export default Header;
