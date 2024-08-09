import { useEffect, useState } from "react"
import styles from "./seach.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "fb4a72a8b3304efb930762dee55edb1f"

export default function Search({ setFoodData }) {
    const [query, setQuery] = useState("pizza")

    const fetchFood = async () => {
        try {
            const resp = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await resp.json()
            console.log(data.results)
            // Update the foodData with the fetched results
            setFoodData(data.results)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        fetchFood()
    }, [query])

    return (
        <div className={styles.searchContainer}>
            <input 
            
            value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
        </div>
    )
}
