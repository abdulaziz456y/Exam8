import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import HomePage from './pages/HomePage';
import Katalog from './pages/Katalog';
import Footer from './footer/Footer';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Product from './products/Product';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/productpage" element={<ProductPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/katalog' element={<Katalog />} />
          <Route path='/product' element={<Product />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
