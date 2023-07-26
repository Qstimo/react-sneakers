import Card from "../components/Card";
import React from "react";



function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCard,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      isLoading
        ? [...Array(8)]
        : filteredItems
          )
    .map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => {
          onAddToFavorite(obj);
        }}
        onPlus={(obj) => onAddToCard(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

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

      <div className="d-flex flex-wrap mb-30">{renderItems()}</div>
    </div>
  );
}

export default Home;
