import React from 'react'
import { useState, useEffect } from 'react';
import FinnHub from '../../apis/FinnHub.js';
const StockData = ({symbol}) => {

    const [stockData, setStockData] = useState()
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await FinnHub.get('/stock/profile2', {
                    params: {
                        symbol
                    }
                })
                if (isMounted){
                    setStockData(response.data);
                }
            } catch (error){
                console.log(error);
            }
        }
        fetchData();
        return () => {isMounted = false}
    }, [symbol])
  return (
    <div>
        {stockData && (
            <div className='row border bg-white rounded shadow-sm p-4 mt-5'>
                <div className='col'>
                    <div>
                        <span className='fw-bold'>Name: </span>
                        {stockData.name}
                    </div>
                    <div>
                        <span className='fw-bold'>Country: </span>
                        {stockData.country}
                    </div>
                    <div>
                        <span className='fw-bold'>Ticker: </span>
                        {stockData.ticker}
                    </div>
                </div>

                <div className='col'>
                    <div>
                        <span className='fw-bold'>Exchange: </span>
                        {stockData.exchange}
                    </div>

                    <div>
                        <span className='fw-bold'>Industry: </span>
                        {stockData.finnhubIndustry}
                    </div>
                    <div>
                        <span className='fw-bold'>IPO: </span>
                        {stockData.ipo}
                    </div>
                </div>


                <div className='col'>
                    <div>
                        <span className='fw-bold'>Market Cap: </span>
                        {stockData.marketCapitalization}
                    </div>

                    <div>
                        <span className='fw-bold'>Shares Outstanding: </span>
                        {stockData.shareOutstanding}
                    </div>
                    <div>
                        <span className='fw-bold'>Url: </span>
                        <a href={stockData.weburl}>{stockData.weburl}</a>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default StockData
