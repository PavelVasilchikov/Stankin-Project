import {Link} from "react-router-dom";
function Card(props){

   
    return(
    <div className="card"  > 
    <Link to="/gamepage" className="links"> 
    <button> 
    <img src={props.imageUrl} alt=""/>
    <div className="price">
    <s>{props.altprice}p</s>
    <p>{props.price}p</p>
    </div>
    </button>
    </Link>
    </div>
   
    );
}


export default Card;