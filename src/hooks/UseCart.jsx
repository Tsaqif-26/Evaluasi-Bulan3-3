import { useCartContext } from "../contexts/CartContext";

export const UseCart = () => {
    const {cart, addToCart, removeFromCart, total} = useCartContext()

    return {cart, addToCart, removeFromCart, total}
}