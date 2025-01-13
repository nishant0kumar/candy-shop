import '../assets/css/common.css';
import {Link} from "react-router-dom";
import CartButton from '../assets/extras/CartButton.jsx';

export default function Header(props) {
    return(
        <header>
            <div className="header-left">
                <Link to="/" className="logo">
                    <img src="https://www.iconeasy.com/icon/256/System/Swirl%20Finder/Finder%20Candy.png" alt="logo"/>
                    <span className="brand-name">CandyShop</span>
                </Link>
            </div>

            <nav className="nav">
                <Link to="/" className="nav-link">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </Link>
                <Link to="/store" className="nav-link">
                    <i className="fas fa-store"></i>
                    <span>Store</span>
                </Link>
                <Link to="/favour" className="nav-link">
                    <i className="fas fa-heart"></i>
                    <span>Favorites</span>
                </Link>
                <div className="js-cart-container">
                    <CartButton/>
                </div>
            </nav>
        </header>
    );
}