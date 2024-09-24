import '../assets/css/common.css';

import {Link} from "react-router-dom";
import CartButton  from '../assets/extras/CartButton.jsx';
export default function Header(props) {
    
    return(
      <header>
          <div className="loogo">
             <a href="/">
             <img src="https://www.iconeasy.com/icon/256/System/Swirl%20Finder/Finder%20Candy.png" alt="logo" height="50px" width="100px"/>
             </a>
          </div>

          <nav className="nav">
            <a href={props.title} className="nav-link">{props.title}</a>
            <a href="/favour" className="nav-link">Love</a>
            <div className="js-cart-container">
              <CartButton/>
                
            </div>
          </nav>
      </header>
    );
}