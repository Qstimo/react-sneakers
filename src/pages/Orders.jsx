import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const [orders, setOrders] = React.useState(
    JSON.parse(localStorage.getItem("order"))
  );
    const {onAddToFavorite, onAddToCArt} = React.useContext(AppContext);
  console.log(orders);

  return (
    <div className="content p-40 ">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap mb-30">
        <div className="d-flex flex-wrap mb-30">
          {orders.map((obj) => {
            Object.values(obj).map((item, index) => (
              <Card
              key={index}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={onAddToFavorite}
              {...item}
              />
            ));
          })}
        </div>
      </div>
    </div>
  );
}

export default Orders;
