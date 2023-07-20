import styles from './Card.module.scss'
import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from "../../context";



function Card({ id, onFavorite, name, imageUrl, price, onPlus, favorited = false, added = false, loading = false }) {
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
    onPlus({ id, name, imageUrl, price });
  };
  const { isItemAdded } = React.useContext(AppContext)
  console.log(isItemAdded(), name)
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite({ id, name, imageUrl, price });
  }
  console.log(added, name)
  return (

    <div className={styles.card}>
      {
        loading ? <ContentLoader
          speed={7}
          width={150}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#bdbdbd"
          foregroundColor="#ecebeb"

        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="120" />
          <rect x="0" y="110" rx="5" ry="5" width="149" height="15" />
          <rect x="0" y="135" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="160" rx="5" ry="5" width="80" height="24" />
          <rect x="115" y="153" rx="5" ry="5" width="32" height="32" />
        </ContentLoader> : <><div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked" />
        </div><img width={133} height={112} src={imageUrl} alt="" /><h5>{name}</h5><div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} alt="plus" src={isItemAdded(id) ? "/img/btn-cheked.svg" : "img/plus.svg"} />
          </div></>
      }

    </div>

  )
}
export default Card;