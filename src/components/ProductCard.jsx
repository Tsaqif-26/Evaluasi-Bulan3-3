import {UseCart} from "../hooks/UseCart";
import { Link } from "react-router-dom";

export default function ProductCard({product}) {

    const {addToCart} = UseCart()

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />

            <h4>{product.title}</h4>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
                Tambahkan ke Keranjang
            </button>

            <Link to={`/products/${product.id}`} className="detail-link">
               Lihat Detail
            </Link>
        </div>
    )
}