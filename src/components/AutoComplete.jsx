import React from 'react';
import { useState, useEffect } from 'react';
import FinnHub from '../../apis/FinnHub.js';

const AutoComplete = () => {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try{
        const response = await FinnHub.get('/search', {
          params: {
            q: search
          }
        })
        if (isMounted){
          setResults(response.data.result);
        }
      } catch (error){

      }
    }
    if (search.length > 0){
      fetchData();
    } else{
      setResults([])
    }
  }, [search])
  return (
    <div className='w-50 p-5 rounded mx-auto'>
      <div className='form-floating dropdown'>
        <input style={{backgroundColor: "rgba(145, 158, 171, 0.04)"}} type="text" name="" id="search" className='form-control' placeholder='Search' autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)} />
        <label htmlFor="search">Search</label>
        <ul className='dropdown-menu'>
          <li>stock1</li>
          <li>stock2</li>
          <li>stock3</li>
        </ul>
      </div>
    </div>
  )
}

export default AutoComplete
