import Info from "./info";
import React from "react";
import AppContext from "../context";

function Drawer({ onClose, items, onRemove = [] }) {
  const [isOrderComplited, setIsOrderComplited] = React.useState(false);

  const { setCartItems, cartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);

  const onClickOreder = () => {
    try {
      localStorage.setItem('order', JSON.stringify([{...cartItems}]));
      // setOrderId(JSON.parse(localStorage.getItem('order')));
      const objOrder = JSON.parse(localStorage.getItem('order'));
      setOrderId(Object.keys(objOrder));
      setIsOrderComplited(true);
      setCartItems([]);
    }
    catch (eror) {
      alert("Не удалось создать заказ");
    }
  };

  const totalPrice = cartItems.reduce((sum, obj)=> obj.price + sum, 0);

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
                    <b>{totalPrice} руб. </b>
                  </li>
                  <li className="d-flex">
                    <span>
                      Налог 5%:
                    </span>
                    <div></div>
                    <b>{totalPrice/100 *5} руб. </b>
                  </li>
                </ul>
                <button onClick={onClickOreder} className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"></img></button>
              </div></>) : (<Info
                title={isOrderComplited ? 'Заказ оформлен!' : 'Корзна пустая'}
                image={isOrderComplited ? 'img/complited-order.png' : 'img/empty-cart.png'}
                description={isOrderComplited ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке ` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}

              />

          )
        }
      </div>
    </div>
  )
}
export default Drawer;