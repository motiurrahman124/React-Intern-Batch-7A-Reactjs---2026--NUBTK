import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './About'
import Products from './Products'
import ProductDetails from './ProductDetails'
import MainLayout from './layouts/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
