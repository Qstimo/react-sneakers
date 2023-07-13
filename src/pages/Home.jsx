import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCard,
}) {
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: '${searchValue}'` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" className="" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="\img\btn-remuve.svg"
              alt="clear"
            ></img>
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          ></input>
        </div>
      </div>

      <div className="d-flex flex-wrap mb-30">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((items, index) => (
            <Card
              key={index}
              title={items.name}
              price={items.price}
              imageUrl={items.imageUrl}
              onFavorite={(obj) => {
                onAddToFavorite(obj);
              }}
              onPlus={(obj) => onAddToCard(obj)}
              id ={items.id}
            />
          ))}
      </div>
      
    </div>
  );
}

export default Home;
