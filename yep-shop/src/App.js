

import {Route,Routes} from "react-router-dom";
import Header from './components/Header';
import React from "react";
import Home from './pages/Home';
import Drawer from './components/Drawer';
import DrawerFav from './components/DrawerFav';
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";
import GamePage from "./pages/GamePage";
import Cart from "./pages/Cart";
import axios from "axios";
import { useEffect } from "react";





function App() {  
  const [searchValue,setSearchValue]= React.useState('');
const onChangeSearchInput=(event)=>{
  
  setSearchValue(event.target.value);
} 

 
  const [favItems,setFavItems]= React.useState([]);

  const [cartItems,setCartItems]= React.useState([ {
    "id": 1,
    "title": "Satisfactory",
    "price": "399",
    "altprice": "699",
    "imageUrl": "/img/1.png"
  },
  {
    "id": 2,
    "title": "Counter-Strike",
    "price": "399",
    "altprice": "699",
    "imageUrl": "/img/2.png"
  }]);

  const [saleItems,setSaleItems]= React.useState([]);
  const [GameDescription,SetGameDescription]= React.useState([]);
  const [Description,SetDescription]= React.useState([]);
  React.useEffect(() => {

    axios.get('https://localhost:7245/api/GameCart').then((res) => {setSaleItems(res.data);
    });

}, []);
 React.useEffect(() => {
    axios.get('https://localhost:7245/api/GameDescriptions').then((res) => {SetGameDescription(res.data);
    });

}, []);
   const [selectedGame, setSelectedGame] = React.useState(null);
    //  const handleGameClick = (saleItems) => {
    //     setSelectedGame(saleItems);
    //     setSaleItems(saleItems.filter(item => item.Gameid === saleItems.id));
    // };
    const handleGameClick = (game) => {
      setSelectedGame(game);
      SetDescription(GameDescription.filter(item => item.gameId === game.id));
   
    };

  const [cartOpened,setCartOpened]= React.useState(false);
  const [favOpened,setFavOpened]= React.useState(false);
  return (


<div className="">

 

  <Header onChangeSearch={onChangeSearchInput} />
  <Routes>

 
    <Route path="/" element={<Home saleItems={saleItems}  onGameClick={handleGameClick} searchValue={searchValue}/>}>
      
    </Route>

    <Route path="/favorites" element={<Favorites/>}>
    </Route>
    <Route path="/products" element={<Products saleItems={saleItems} onGameClick={handleGameClick}/>}>
    </Route>

    <Route path="/gamepage" element={ selectedGame && <GamePage GameDescription={Description} Game={selectedGame}/>}>
    </Route>

    <Route path="/cart" element={ <Cart items={cartItems} />}>
    </Route>




    </Routes>
    </div>
  );
} 

export default App;
