import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999 },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 15999 }
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />


      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex">
          <Card 
          title="Мужские Кроссовки Nike Blazer Mid Suede" 
          price={12999} 
          imageUrl='/img/sneakers/1.jpg' />
           <Card 
          title="Мужские Кроссовки Nike Blazer Mid Suede" 
          price={12999} 
          imageUrl='/img/sneakers/2.jpg' />
          {/* {arr.map((obj)=> (
          <Card />
        ))

        } */}

        </div>

      </div>
    </div>
  );
}

export default App;
