import React from 'react'
import AppContext from '../context';

 const info = (title, description) => {
    const { site } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
    <img className="mb-20" src="/img/empty-cart.png" width={120} height={120} alt="пустая корзина" />
    <h2>{title}</h2>
    <p className="opacity-6">{description}</p>
    <button onClick={onClose}  className="greenButton">
      <img src="img/arrow.svg" alt="Arrow" />
      Вернуться назад
    </button>
  </div>
  )
}
export default info;