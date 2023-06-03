

import {Route} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Drawer from './components/Drawer';
import Favorites from "./pages/Favorites";
import GamePage from "./pages/GamePage";

const arr=[
  {price:399,altprice:699,imageUrl:"/img/1.png"},
  {price:399,altprice:699,imageUrl:"/img/2.png" },
  {price:399,altprice:699,imageUrl:"/img/3.png"},
  {price:399,altprice:699 ,imageUrl:"/img/4.png"},
  {price:399,altprice:699 ,imageUrl:"/img/5.png"},
  {price:399,altprice:699 ,imageUrl:"/img/6.png"}
];


function App() {  
  return (
<div className="wrapper">
  <Drawer/>
  <Header/>
    <Route path="/" exact>
      <Home arr={arr}/>
    </Route>
    <Route path="/favorites" exact>
      <Favorites/>
    </Route>
    <Route path="/gamepage" exact>
      <GamePage arr={arr}/>
    </Route>
    </div>
  );
} 

export default App;
