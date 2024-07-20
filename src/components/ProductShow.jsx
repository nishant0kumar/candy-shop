import {product} from '../assets/data/product.js';


function ProductShow() {
    return(
        <main className="products-prompt js-showcase">
                {product.slice(10-20).map((product, index) => (
                    <div className="products-showcase" key={index}>
                        <img src={product.image} alt="product-image"/>
                    </div>
                ))}
            </main>
    );
}

export default ProductShow;