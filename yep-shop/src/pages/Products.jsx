import Card from '../components/Card';
import {Link} from "react-router-dom";
function Products( {saleItems,onGameClick,searchValue}){
  {console.log(saleItems)
    
  }
return(
<div className="content">
        <h1> {searchValue ? 'Searching...' : "All Products"}</h1>
        {/* <h1> Best offers</h1> */} 
         <div className="games">
         
           {saleItems.filter(game=>game.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((game)=>(
            
             <div className="card" onClick={()=>onGameClick(game)}> 
             <Link to="/gamepage" className="links"> 
             <button> 
             <img className="allProdImg" src={game.imageUrl} alt=""/>
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