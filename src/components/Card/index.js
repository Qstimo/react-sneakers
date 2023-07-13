import styles from './Card.module.scss'
import React from 'react';

function Card({ id, onFavorite, title, imageUrl, price, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  const onClickFovorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite({ id, title, imageUrl, price });
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFovorite}>
        <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked" />
      </div>

      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} alt="plus" src={isAdded ? "/img/btn-cheked.svg" : "img/plus.svg"} />
      </div>
    </div>
  )
}
export default Card;