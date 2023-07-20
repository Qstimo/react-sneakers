function Drawer({ onClose, items, onRemove = [] }) {
  return (
    <div className="overlay" >
      <div className="drawer ">
        <h2 className="mb-20 d-flex justify-between">Корзина <img onClick={onClose} className="remuve-btn" src="\img\btn-remuve.svg" alt="Remove"></img></h2>
        {
          items.length > 0 ? (
            <><div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem mb-20 d-flex align-center">
                  <div className="cardItemImg d-flex" style={{ backgroundImage: `url(${obj.imageUrl})` }}></div>

                  <div className="mr-20">
                    <p className="mb-5">{obj.name}</p>
                    <b>{obj.price} руб.</b>

                  </div>
                  <img className="remuve-btn" onClick={() => onRemove(obj.id)} src="\img\btn-remuve.svg" alt="Remove"></img>
                </div>
              ))}
            </div><div className="cartTotalBlock">
                <ul className="">
                  <li className="d-flex">
                    <span>
                      Итого:
                    </span>
                    <div></div>
                    <b>21 498 руб. </b>
                  </li>
                  <li className="d-flex">
                    <span>
                      Налог 5%:
                    </span>
                    <div></div>
                    <b>1074 руб. </b>
                  </li>
                </ul>
                <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"></img></button>
              </div></>) : (
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" src="/img/empty-cart.png" width={120} height={120} alt="пустая корзина" />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose}  className="greenButton">
                <img src="img/arrow.svg" alt="Arrow" />
                Вернуться назад
              </button>
            </div>
          )
        }






      </div>
    </div>
  )
}
export default Drawer;