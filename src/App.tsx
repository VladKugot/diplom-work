import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { CartPage } from './Components/Pages/CartPage';
import { HomePage } from './Components/Pages/HomePage';

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className="section">
        <div className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </main>
      <div className="footer__conteiner">
        <Footer />
      </div>
    </div>
  );
}

