import { Component } from "react";
import { MenuData } from "./MenuData";
import"./NavBarStyles.css";
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
              <h1 className="logo">YEP<img className="mainlogo" width={70} height={60} src="img/Logo.png"/>
              </h1>  
              <ul className="nav-menu">
                {MenuData.map((item,index)=>{
                    return(
                        <li key={index}><a href={item.url}
                        className={item.cName}
                        > {item.title} </a></li>
                    )
                })}
              </ul>
                
            </nav>
        )
    }
}
export default Navbar;