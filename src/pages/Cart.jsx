import { UseCart } from "../hooks/UseCart";

export default function Cart() {

    const {cart, removeFromCart, total} = UseCart()

    return(
        <div className="cart-page">
            <h2>Keranjang</h2>

            {cart.length === 0 ? (
                <p>Keranjang Kosong</p>
            ) : (
                <ul>
                    
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - ${item.price.toFixed(2)}
                            <button onClick={() => removeFromCart(item.id)}>Hapus</button> 
                        </li>
                    ))}
                </ul>
            )}

            <h3>${total.toFixed(2)}</h3>
        </div>
    )
}