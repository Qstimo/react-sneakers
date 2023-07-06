function Drawer(){
    return(
        <div className="overlay" style={{display: 'none'}}>
        <div className="drawer ">
          <h2 className="mb-20 d-flex justify-between">Корзина <img className="remuve-btn" src="\img\btn-remuve.svg" alt="Remove"></img></h2>

          <div className="items">
          <div className="cartItem mb-20 d-flex align-center">
            <div className="cardItemImg d-flex" style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}>
            </div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>

            </div>
            <img className="remuve-btn" src="\img\btn-remuve.svg" alt="Remove"></img>
          </div>

          <div className="cartItem mb-20 d-flex align-center">
            <div className="cardItemImg d-flex" style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>

            </div>
            <img className="remuve-btn" src="\img\btn-remuve.svg" alt="Remove"></img>
          </div>

          </div>
            <div className="cartTotalBlock"> 
            <ul className="">
              <li className="d-flex">
              <span>
                 Итого:
                </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className="d-flex" >
              <span>
              Налог 5%: 
                </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"></img></button>
            </div>
        </div>
      </div>
    )
}
export default Drawer;