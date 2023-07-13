import Card from "../components/Card";

function Favorites ({items, onAddToFavorite}) {
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          Мои закладки
        </h1>
      </div>

      <div className="d-flex flex-wrap mb-30">
      <div className="d-flex flex-wrap mb-30">
        {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              favorited={true}
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
      </div>
      
    </div>
  );
}

export default Favorites;
