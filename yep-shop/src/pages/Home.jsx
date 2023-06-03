import Card from '../components/Card';
import GamePage from './GamePage';
function Home( {arr}){
return(
<div className="content">
        <h1> Best offers</h1>
         <div className="games">
         
           {arr.map((obj)=>(
            <Card
            price={obj.price}
            altprice={obj.altprice}
            imageUrl={obj.imageUrl}
            onGameClick={()=>console.log(obj)}
            />
            ))}
         </div>
</div>
);
}
export default Home;