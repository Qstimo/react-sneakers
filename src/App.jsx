import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      
      const cartResponse =  await axios
      .get("https://64aeb99fc85640541d4d9a56.mockapi.io/cart");
      const itemsResponse =  await axios
      .get("https://64aeb99fc85640541d4d9a56.mockapi.io/items");

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) === Number(obj.id))
      );
      axios.delete(
        `https://64aeb99fc85640541d4d9a56.mockapi.io/cart/${obj.id}`
      );
    } else {
      axios.post("https://64aeb99fc85640541d4d9a56.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://64aeb99fc85640541d4d9a56.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      setFavorites((prev) => [...prev]);
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
    // console.log(favorites);
  };

  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  React.useEffect(() => {
    const storedArray = localStorage.getItem("favorites");
    if (storedArray) {
      // setFavorites(JSON.parse(storedArray));
      // console.log(JSON.parse(storedArray));
    }
  }, []);

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parrentId) === Number(id));
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setCartOpened,setCartItems,cartItems}}>
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
              cartItems={cartItems}
              items={items} 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
              isLoading = {isLoading}
            />
          }
        ></Route>
        <Route
          path="favorites"
          element={
            <Favorites  onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
        <Route
          path="orders"
          element={
            <Orders   />
          }
        ></Route>
      </Routes>
    </div>
    </AppContext.Provider>    
  );
}

export default App;
