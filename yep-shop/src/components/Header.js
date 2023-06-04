import {Link} from "react-router-dom";
function Header(props,{onChangeSearchInput} ){
return(

    <header>
<div className="headerLeft">
  <div> 
  <a href="/" className="links">
    <h3>YEP <img  src="/img/logo.png"/> </h3>
    </a>
  </div>


  <div className="search-block">
    <img src="/img/search.svg" alt="search"/>
    <input  onChange={onChangeSearchInput} placeholder="Search..."/>
  </div>


</div>
  <ul className="headerRight">
    <li>
    <a href="/" className="links">
    <span> Home </span>
    </a>
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