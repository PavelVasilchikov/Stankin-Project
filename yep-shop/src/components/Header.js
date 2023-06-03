import {Link} from "react-router-dom";
function Header(props){
return(
    <header>
<div className="headerLeft">
  <div> 
  <Link to="/" className="links">
    <h3>YEP <img  src="/img/logo.png"/> </h3>
    </Link>
  </div>
  <div className="search-block">
    <img src="/img/search.svg" alt="search"/>
    <input placeholder="Search..."/>
  </div>
</div>
  <ul className="headerRight">
    <li>
    <Link to="/" className="links">
    <span> Home </span>
    </Link>
    </li>
    <li>
      <Link to="/products" className="links">
      <span> Products </span>
      </Link>
    </li>
    <li>
    <Link to="/profile" className="links">
    <span> Profile </span>
    </Link>
    </li>
    <li onClick={props.onClickCart}>
    <span className="CartBtn"> Cart </span>
    </li >
    <li>
    <Link to="/favorites" className="links">
    <span> Favorites </span>
    </Link>
    </li>
  </ul>
</header>
);
}
    

export default Header;