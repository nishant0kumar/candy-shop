import CartButton from '../assets/extras/CartButton';

export default function Footer() {
    return (
        <>
            <footer className="web-footer">
                <div className="footer">
                    <h1>Quick Links</h1>
                    <button>Order Status</button>
                    <button>Help</button>
                    <button>Your Favourites</button>
                </div>
                <div>
                    <h3>Phone Number &#x260E; : +91 9250040805</h3>
                    <h4>Mail Id &#9777; : kamleshkumar92500@gmail.com</h4>
                </div>
                <div>
                    <ol>
                        <li>
                        Step into the world of sweetness at Sweet Store. From timeless classics to artisanal delights, our carefully curated selection of candies and chocolates promises to satisfy every craving and sweeten every moment. Treat yourself to a taste of happiness today!</li>

                        <li>
                        Treat yourself to our wide array of confections, from timeless classics to artisanal delights. Whether you're craving something familiar or seeking a new indulgence, our selection promises to satisfy. With convenient online ordering, bringing sweetness into your life has never been easier. Join us on a journey of pure delight and indulge in the magic of Sweet Store.</li>

                        <li>
                        Experience the joy of sweet perfection with every bite. Share the love by surprising someone special with a sweet treat. With our commitment to quality and passion for spreading happiness, we're here to make every moment a little sweeter. Join us in celebrating the sweetness of life at Sweet Store.</li>

                        <li>
                        Whether you're celebrating a special occasion or simply treating yourself, our candies and chocolates are sure to elevate your day. With each carefully crafted confection, we aim to create moments of pure bliss and indulgence. Come, explore our world of sweetness, and let the magic of Sweet brighten your day.</li>
                    </ol>
                </div>

                <div className="copy">
                    <p>Copyright &copy; 2024 Anita Sweet House. All rights reserved</p>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Sales Policy</a></li>
                        <li><a href="">Site Map</a></li>
                    </ul>
                </div>
            </footer>

            <div className="mobile-footer">
                <a href="/"><i className="fa-solid fa-house"></i></a>
                <a href="/store"><i className="fa-solid fa-store"></i></a>
                <a href="./pages/wishlist.html"><i className="fa-solid fa-heart"></i></a>
                <div className="js-cart-bag"><CartButton request='footer'/></div>
            </div>
        </>
    );
}