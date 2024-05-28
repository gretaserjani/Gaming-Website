import React, { useState } from 'react';
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({setResults}) => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch(`https://api.rawg.io/api/platforms?key=${'dc0bd1d35e8047cb974d8c9c9de4d519'}`)
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            const results = json.filter((game) => {
             return game && game.name && game.name.toLowerCase().includes(value)
            })
            setResults(results)
        })

    }

    const handleChange = (value) => {
          setInput(value)
          fetchData(value)
    }

    
return (<>
    <div className='input-wrapper'>
    <FaSearch id='search-icon'></FaSearch>
    <input placeholder='Search game' 
    value={input} 
    onChange={(e) => handleChange(e.target.value)}></input>
    </div>
    </>
)
};

export default SearchBar;