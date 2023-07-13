import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import {  Route} from 'react-router-dom'

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
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);


  React.useEffect(() => {
    // fetch('https://64aeb99fc85640541d4d9a56.mockapi.io/items').then(res => {
    //   return res.json();
    // }).then(json => {
    //   setItems(json)
    // });


    axios.get('https://64aeb99fc85640541d4d9a56.mockapi.io/items').then(res => {
      setItems(res.data);
    })

    axios.get('https://64aeb99fc85640541d4d9a56.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })

  }, [])

  const onAddToCard = (obj) => {
    axios.post('https://64aeb99fc85640541d4d9a56.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://64aeb99fc85640541d4d9a56.mockapi.io/cart/${id}`);
     setCartItems((prev) => prev.filter(item => item.id !== id));
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToFavorite = (obj)=>{
    // axios.post(`https://64aeb99fc85640541d4d9a56.mockapi.io/cart`);
    setFavorites((prev)=>[...prev, obj]);
    console.log(obj);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove = {onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path='/test'>test</Route>

      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 >{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" className='' alt="Search" />
            {searchValue && (
              <img onClick={() => setSearchValue('')} className="clear cu-p" src="\img\btn-remuve.svg" alt="clear"></img>
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap mb-30">
          {/* <Card 
          title="Мужские Кроссовки Nike Blazer Mid Suede" 
          price={12999} 
          imageUrl='/img/sneakers/1.jpg' /> */}

          {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((items, index) => (
            <Card
              key={index}
              title={items.name}
              price={items.price}
              imageUrl={items.imageUrl}
              onFavorite={(obj)=> {onAddToFavorite(obj);
                console.log(favorites);
              } }
              onPlus={(obj) => onAddToCard(obj)} 
              />
              
          ))
         
          }

        </div>
        <div>
            {favorites}
            </div>
      </div>
    </div>
  );
}

export default App;
