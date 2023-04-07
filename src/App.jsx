import React from 'react';
import './App.css';
import StockDetailPage from './pages/StockDetailPage.jsx';
import StockOverviewPage from './pages/StockOverviewPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WatchListContextProvider } from './context/WatchListContext.jsx';

const App = () => {
  return (
    <main className='container'>
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage/>}/>
            <Route path="/detail/:symbol" element={<StockDetailPage/>}/>
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  )
}

export default App
