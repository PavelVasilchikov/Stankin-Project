

import {Route,Routes} from "react-router-dom";
import Header from './components/Header';
import React from "react";
import Home from './pages/Home';
import Drawer from './components/Drawer';
import DrawerFav from './components/DrawerFav';
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";
import GamePage from "./pages/GamePage";
import axios from "axios";
import { useEffect } from "react";





function App() {  
  const [searchValue,setSearchValue]= React.useState('');
const onChangeSearchInput=(event)=>{
setSearchValue();
} 
  const [favItems,setFavItems]= React.useState([]);

  const [saleItems,setSaleItems]= React.useState([]);
  const [GameDescription,SetGameDescription]= React.useState([]);
  const [Description,SetDescription]= React.useState([]);
  React.useEffect(() => {

    axios.get('https://647b4e51d2e5b6101db11d2d.mockapi.io/SaleItems').then((res) => {setSaleItems(res.data);
    });

}, []);
 React.useEffect(() => {
    axios.get('https://647b4e51d2e5b6101db11d2d.mockapi.io/GameDescription').then((res) => {SetGameDescription(res.data);
    });

}, []);
   const [selectedGame, setSelectedGame] = React.useState(null);
    //  const handleGameClick = (saleItems) => {
    //     setSelectedGame(saleItems);
    //     setSaleItems(saleItems.filter(item => item.Gameid === saleItems.id));
    // };
    const handleGameClick = (game) => {
      setSelectedGame(game);
      SetDescription(GameDescription.filter(item => item.gameid === game.id));
   
    };

  const [cartOpened,setCartOpened]= React.useState(false);
  const [favOpened,setFavOpened]= React.useState(false);
  return (


<div className="wrapper">

  {cartOpened ? <Drawer onClose={()=>setCartOpened(false)}/>:null }
  {favOpened ? <DrawerFav items={favItems} onClose={()=>setFavOpened(false)}/>:null }
  <Header onChangeSearchInput={onChangeSearchInput} onClickCart={()=>setCartOpened(true)} onClickFav={()=>setFavOpened(true)}/>
  <Routes>

 
    <Route path="/" element={<Home saleItems={saleItems} onGameClick={handleGameClick}/>}>
      
    </Route>

    <Route path="/favorites" element={<Favorites/>}>
    </Route>
    <Route path="/products" element={<Products saleItems={saleItems} onGameClick={handleGameClick}/>}>
    </Route>

    <Route path="/gamepage" element={ selectedGame && <GamePage GameDescription={Description} Game={selectedGame}/>}>
    </Route>
    </Routes>
    </div>
  );
} 

export default App;
