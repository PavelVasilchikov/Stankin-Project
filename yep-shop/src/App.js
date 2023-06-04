

import {Route,Routes} from "react-router-dom";
import Header from './components/Header';
import React from "react";
import Home from './pages/Home';
import Drawer from './components/Drawer';
import Favorites from "./pages/Favorites";
import GamePage from "./pages/GamePage";
import axios from "axios";
import { useEffect } from "react";




function App() {  
  const [searchValue,setSearchValue]= React.useState('');
const onChangeSearchInput=(event)=>{
setSearchValue();
} 


  const [saleItems,setSaleItems]= React.useState([]);
  const [GameDescription,SetGameDescription]= React.useState([]);
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
      SetGameDescription(GameDescription.filter(item => item.gameid === game.id));
      console.log(GameDescription)// правильно ли написан текст перед фильт
    };

  const [cartOpened,setCartOpened]= React.useState(false);
  return (


<div className="wrapper">

  {cartOpened ? <Drawer onClose={()=>setCartOpened(false)}/>:null }
  <Header onChangeSearchInput={onChangeSearchInput} onClickCart={()=>setCartOpened(true)}/>
  <Routes>

 
    <Route path="/" element={<Home saleItems={saleItems} onGameClick={handleGameClick}/>}>
      
    </Route>
    <Route path="/favorites" element={<Favorites/>}>
    </Route>

    <Route path="/gamepage" element={ selectedGame && <GamePage GameDescription={GameDescription} Game={selectedGame}/>}>
    </Route>
    </Routes>
    </div>
  );
} 

export default App;
