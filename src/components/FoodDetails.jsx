import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css"
import Itemlist from "./Itemliste";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    // URL to fetch information for each product by its ID
    const API_KEY = "fb4a72a8b3304efb930762dee55edb1f";
    const url = `https://api.spoonacular.com/recipes/${foodId}/information`;

    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(`${url}?apiKey=${API_KEY}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                console.log(data);
                setFood(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching food details:', error);
            }
        }
        fetchFood();
    }, [foodId]);

    return (
        <div>

          <div className={styles.recipecard}>

          <h1 className={styles.recipeName}>{food.title}</h1>
          
          <img className={styles.reciperImage} src={food.image} />

          <div className={styles.recipeDetails}>
          
          <span> 
          <strong>
          ⏰ {food.readyInMinutes} Minutes
          </strong>
          </span> <br />

          <span>
           <strong> {food.vegetarian ? " 🥕 vegetarian" : " 🍗 NO vegetarian"}</strong>
          </span><br />

          <span>
          <strong>   😎  {food.servings} </strong>
          </span><br />

       <span>
       <strong>      
        {food.vegan ? " 🐮 vegan" : "not vegan"}
       </strong>
       </span>
          <div>


          <span>
          <strong>
          💳  {food.pricePerServing} $
          </strong>
          </span>
    
          </div>
          
          </div>
         


          <div>
          <h2>Ingredients</h2>

          <Itemlist food={food} isLoading={isLoading} />


          <h2 className={styles.recipeIntraction}>Instructions </h2>
          <ol>
            <div> 
            {isLoading ? <p>loading ... </p> : food.analyzedInstructions[0].steps.map((step)=>(<li>
            {step.step}
            </li>)) }</div></ol>
          

          </div>

        </div>

        </div>
    );
}
