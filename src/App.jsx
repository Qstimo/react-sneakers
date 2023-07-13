import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

// const arr = [
//   { "name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 12999, "imageUrl": "/img/sneakers/1.jpg"},
//   { "name": "Мужские Кроссовки Nike Air Max 270", "price": 15999, "imageUrl": "/img/sneakers/2.jpg" },
//   { "name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imageUrl": "/img/sneakers/3.jpg"},
//   { "name": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imageUrl": "/img/sneakers/4.jpg" },
//   { "name": "Мужские Кроссовки Under Armour Curry 8", "price": 7299, "imageUrl": "/img/sneakers/5.jpg" },
//   { "name": "Мужские Кроссовки Nike Kyrie 7", "price": 8699, "imageUrl": "/img/sneakers/6.jpg" },
//   { "name": "Мужские Кроссовки Jordan Air Jordan 11", "price": 8599, "imageUrl": "/img/sneakers/7.jpg" },
//   { "name": "Мужские Кроссовки Nike LeBron XVIII", "price": 8999, "imageUrl": "/img/sneakers/8.jpg" },
//   { "name": "Мужские Кроссовки Nike Lebron XVIII Low", "price": 18999, "imageUrl": "/img/sneakers/9.jpg" },
//   { "name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 6999, "imageUrl": "/img/sneakers/10.jpg" },
//   { "name": "Кроссовки Puma X Aka Boku Future Rider", "price": 7999, "imageUrl": "/img/sneakers/11.jpg" },
//   { "name": "Мужские Кроссовки Nike Kyrie Flytrap IV", "price": 10999, "imageUrl": "/img/sneakers/12.jpg" }

// ]

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  // const [favorites, setFavorites] = React.useState(localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')) : []);

  React.useEffect(() => {
    // fetch('https://64aeb99fc85640541d4d9a56.mockapi.io/items').then(res => {
    //   return res.json();
    // }).then(json => {
    //   setItems(json)
    // });

    axios
      .get("https://64aeb99fc85640541d4d9a56.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://64aeb99fc85640541d4d9a56.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCard = (obj) => {
    axios.post("https://64aeb99fc85640541d4d9a56.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://64aeb99fc85640541d4d9a56.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    }else{setFavorites((prev) => [...prev, obj]);}
    console.log(favorites)
  };

  //   const onAddToFavorite = (obj) => {
  //     setFavorites([...favorites, obj]);
  //     localStorage.setItem('arr', JSON.stringify(favorites))
  // }

  // const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('arr'));
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
            />
          }
        ></Route>
        <Route
          path="favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
