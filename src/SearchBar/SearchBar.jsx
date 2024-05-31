import React, { useState } from 'react';
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({setResults}) => {

    const [input, setInput] = useState('')

    const fetchData = (value) => {
        fetch(`https://api.rawg.io/api/platforms?key=${'dc0bd1d35e8047cb974d8c9c9de4d519'}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            const results = json.results.filter((game) => {
             return game && game.name && game.name.toLowerCase().includes(value)
            })
            setResults(results)
        })

    }

    const handleChange = (value) => {
          setInput(value)
          fetchData(value)
    }

    
return (
<>
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








// import React, { useState, useEffect } from 'react';
// import './SearchBar.css';
// import { FaSearch } from 'react-icons/fa';

// const SearchBar = ({ setResults }) => {
//     const [input, setInput] = useState('');
//     const [allGames, setAllGames] = useState([]);
//     const [selectedGenre, setSelectedGenre] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//         fetch(`https://api.rawg.io/api/platforms?key=${'dc0bd1d35e8047cb974d8c9c9de4d519'}`)
//             .then((response) => response.json())
//             .then((json) => {
//                 // Assuming the response contains an array of games under a key 'results'
//                 if (json && json.results && json.results.length > 0) {
//                     setAllGames(json.results);
//                 }
//             })
//             .catch((error) => console.error('Error fetching data:', error));
//     };

//     const handleChange = (value) => {
//         setInput(value);
//         filterGames(value);
//     };

//     const handleGenreChange = (e) => {
//         const genre = e.target.value;
//         setSelectedGenre(genre);
//         filterGames(input, genre);
//     };

//     const filterGames = (value, genre) => {
//         let filteredGames = allGames.filter((game) => {
//             return (
//                 game.name &&
//                 game.name.toLowerCase().includes(value.toLowerCase())
//             );
//         });
//         if (genre) {
//             filteredGames = filteredGames.filter((game) =>
//                 game.genres.includes(genre)
//             );
//         }
//         setResults(filteredGames);
//     };

//     return (
//         <div className="input-wrapper">
//             <FaSearch id="search-icon" />
//             <input
//                 placeholder="Search game"
//                 value={input}
//                 onChange={(e) => handleChange(e.target.value)}
//             />
//             <select value={selectedGenre} onChange={handleGenreChange}>
//                 <option value="">All Genres</option>
//                 <option value="action">Action</option>
//                 <option value="adventure">Adventure</option>
//                 {/* Add more genre options here */}
//             </select>
//         </div>
//     );
// };

// export default SearchBar;