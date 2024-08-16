import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias'; 
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'; 
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh] bg-gray-100'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrar-categorias" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/cadastrar-produto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
               <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;