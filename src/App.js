import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './context/CartContext';

import data from "../src/data/products.json";

console.log (data);

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenid@" />} />
        <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenid@" />} />
        <Route path='/item/:id' element={< ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
