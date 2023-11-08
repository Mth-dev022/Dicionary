import { useEffect, useState, useContext } from "react"
import { inputContext } from "../App"
import axios from "axios"

import styles from './ResultList.module.css'

import Example from "./Example"
import MeaningList from "./MeaningList"
import Synonym from "./Synonym"
import Antonym from "./Antonym"

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const ResultList = () => {

    const [response, setResponse] = useState()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { inputValue } = useContext(inputContext)

    const fetchData = async (param) => {

        try {
            setLoading(true)
            const res = await axios(`/${param}`)
            setResponse(res.data)
            setError(null)

        } catch (e) {
            setError(e)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (inputValue && inputValue.length) {
            fetchData(inputValue)
        }

    }, [inputValue])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h4>No definitions found</h4>
    }

    return (

        <div>

            {response && (

                <div className={styles.container}>

                    <h4>Meaning & definitions:</h4>

                    <MeaningList mean={response} />

                    <h4>Example:</h4>

                    <Example mean={response} />

                    <h4>Synonym:</h4>

                    <Synonym mean={response} />

                    <h4>Antonym:</h4>

                    <Antonym mean={response} />

                </div>

            )}

        </div>
    )
}

export default ResultList;
