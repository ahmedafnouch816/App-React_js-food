import styles from './item.module.css'

export default function Item({ item }){
    return(

        <div>
    <div className={styles.itemContainer}>
    <div className={styles.imageContainer}>
    <img 
    className={styles.image}
    src={'https://spoonacular.com/cdn/ingredients_100x100/' + item.image} />
    </div>
    <div className={styles.nameContainer}>  <h3>{item.name}</h3></div>
   <div className={styles.amountContainer}> <h3>{item.amount} {item.unit}</h3></div>
    
    </div>
    </div>
    ) 
}