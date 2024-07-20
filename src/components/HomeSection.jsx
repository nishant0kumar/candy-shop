import '../assets/css/style1.css';
import banner1 from '../assets/product-images/banner-1.jpg'
import banner2 from '../assets/product-images/banner-2.jpg'

import {product} from '../assets/data/product.js';

export default function HomeSection() {
    return (
        <>
          <div className="about">
                <p className="about-products">Anita Sweet House</p>
                <p className="welcome">
                "Welcome to our candy wonderland, where every visit promises a journey of delightful discovery! Our shelves are lined with an array of tempting treats, from timeless classics that evoke nostalgic memories to artisanal creations that tantalize the taste buds with their unique flavors and textures. Dive into a world of sweetness as you explore our selection of gummies, chocolates, hard candies, and more, each one carefully crafted to bring joy to every bite. "
                </p>
            </div>

            <p className="late">Products</p>
            <main className="products-prompt js-showcase">
                {product.slice(10-20).map((product, index) => (
                    <div className="products-showcase" key={index}>
                        <img src={product.image} alt="product-image"/>
                    </div>
                ))}
            </main>


            <p className="late orange-color">Product Overview</p>
            <section className="premium orange-color">
                <div className="pro-duct">
                <img src={banner1} alt=""/>
                </div>
                <div className="pro-details">
                <p>"Candy: a sweet symphony of sugar, a dance of delight upon the tongue, a fleeting moment of bliss."</p>
                </div>
            </section>

            <section className="premium red-color">
                <div className="pro-details color">
                <p>"Candy: like whispers of joy wrapped in colorful dreams, melting away worries with every taste."</p>
                </div>
                <div className="pro-duct">
                <img src={banner2} alt=""/>
                </div>
            </section>
        </>
    );
}