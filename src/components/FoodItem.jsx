import styles from './Fooditem.module.css'

export default function FoodItem({ food }) {
    return (
      <div className={styles.utemContainer}>
    <img className={styles.itemimage} src={food.image} />
      <div className={styles.itemContent}>
      <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
      <button className={styles.buttomitem}>View Recipe</button>
      </div>
      </div>
    );
  }
  