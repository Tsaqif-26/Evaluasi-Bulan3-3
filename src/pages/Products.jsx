import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products () {

    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [search,setSearch] = useState("")


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                if(!res.ok) throw new Error("Gagal Mengambil Data");
                const data = await res.json()
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    },[])

    if(loading) return <p>Loading...</p>
    if(error) return <p style={{color: 'red'}}>{error}</p>

    const filteredProduct = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))

    return(
        <div className="product-page">
            <h1 style={{paddingLeft: '650px'}}>Daftar Produk</h1>

            <input type="text"
                   placeholder="Cari Produk..."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)} 
                   className="search-bar" />

            <div className="product-grid">
                {filteredProduct.length > 0 ? (
                    filteredProduct.map((p) => <ProductCard key={p.id} product={p}/>)
                ) : (
                    <p>Tidak Ada Produk</p>
                )}
            </div>
        </div>
    )
}