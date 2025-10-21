import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
   <>
      <AuthProvider>
        <CartProvider>
          <nav className='nav-bar'>

            <Link to='/products'>Produk</Link>
            <Link to='/cart'>Keranjang</Link>
            <Link to='/checkout'>Checkout</Link>
            <Link to='/login'>Login</Link>

            <h1 style={{paddingLeft: '900px'}}>Oktomart</h1>
          </nav>

          <Routes>

            <Route path='/' element={<Navigate to='/products'/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={
              <PrivateRoute>
                <Checkout/>
              </PrivateRoute>
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<h2>404 - Halaman Tidak Ditemukan</h2>}/>

          </Routes>
        </CartProvider>
      </AuthProvider>
   </>
  )
}

export default App
