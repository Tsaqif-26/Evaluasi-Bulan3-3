import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UseCart } from "../hooks/UseCart";

export default function Checkout() {

    const {cart, total} = UseCart()
    const {logout} = useAuth()
    const navigate = useNavigate()

    const handleCheckout = () => {
        alert('Chechout Sukses')
        logout()
        navigate('/login')
    }

    return(
        <div className="checkout-page"> 
            <h2>Checkout</h2>

            {cart.length === 0 ? (
                <p>Keranjang Kosong</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button onClick={handleCheckout}>Selesai</button>
                </div>
            )}
        </div>
    )
}