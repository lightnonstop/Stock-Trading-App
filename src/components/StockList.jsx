import React from "react";
import { useState, useEffect } from "react";
import finnHub from "../../apis/FinnHub.js";
const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const responses = [];
      try {
        const responses = await Promise.all(watchList.map(stock => {
          return finnHub.get('/quote', {
            params: {
              symbol: stock
            }
          }

          )
        }))
        console.log(responses);
        if (isMounted) {
          setStock(responses);
        }
      } catch (error) {}
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  return <div>StockList</div>;
};

export default StockList;
