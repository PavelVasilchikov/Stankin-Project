

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
  const onAddToFav=(obj)=>{
    axios.post('https://647b4e51d2e5b6101db11d2d.mockapi.io/favorites',obj);
    setFavItems(prev=>[...prev,obj]);
  }

  const onRemoveFavorites=(id)=>{
   
    axios.delete(`https://647b4e51d2e5b6101db11d2d.mockapi.io/favorites/${id}`);  
    setFavItems(prev=>prev.filter(item=>item.id!=id));

  }


  const [cartItems,setCartItems]= React.useState([]);

  const onAddToCart=(obj)=>{
    obj.counter=1;
    console.log(obj.counter);
    console.log(typeof obj.counter);
    axios.post('https://647b4e51d2e5b6101db11d2d.mockapi.io/cart',obj);
  
    setCartItems([...cartItems,obj]);
  }

  const onRemoveCart=(id)=>{
   
    axios.delete(`https://647b4e51d2e5b6101db11d2d.mockapi.io/cart/${id}`);  
    setCartItems(prev=>prev.filter(item=>item.id!=id));

  }






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

React.useEffect(() => {
  axios.get('https://647b4e51d2e5b6101db11d2d.mockapi.io/cart').then((res) => {setCartItems(res.data);
  });

}, []);

React.useEffect(() => {
  axios.get('https://647b4e51d2e5b6101db11d2d.mockapi.io/favorites').then((res) => {setFavItems(res.data);
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


  return (


<div className="">

 

  <Header onChangeSearch={onChangeSearchInput} />
  <Routes>

 
    <Route path="/" element={<Home saleItems={saleItems}  onGameClick={handleGameClick} searchValue={searchValue}/>}>
      
    </Route>

    <Route path="/favorites" element={<Favorites items={favItems} onRemoveFav={onRemoveFavorites} />}>
    </Route>
    <Route path="/products" element={<Products saleItems={saleItems} onGameClick={handleGameClick}/>}>
    </Route>

    <Route path="/gamepage" element={ selectedGame && <GamePage GameDescription={Description} title={selectedGame.title} price={selectedGame.price} imageUrl={selectedGame.imageUrl} altprice={selectedGame.altprice}  onClickBuyBtn={(obj)=>onAddToCart(obj)}  onClickFavBtn={(obj)=>onAddToFav(obj)}/>}>
    </Route>

    <Route path="/cart" element={ <Cart items={cartItems} onRemoveBuy={onRemoveCart} />}>
    </Route>




    </Routes>
    </div>
  );
} 

export default App;
