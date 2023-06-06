import Card from '../components/Card';
import {Link} from "react-router-dom";
function Products( {saleItems,onGameClick,searchValue}){
return(
<div className="content">
        <h1> Best offers</h1>
         <div className="games">
         
           {saleItems.map((game)=>(
            
            <div className="card" onClick={()=>onGameClick(game)}> 
            <Link to="/gamepage" className="links"> 
            <button> 
            <img src={game.imageUrl} alt=""/>
            <div className="price">
            <s>{game.altprice}p</s>
            <p>{game.price}p</p>
            </div>
            </button>
            </Link>
            </div>
            ))}
         </div>
</div>
);
}
export default Products;