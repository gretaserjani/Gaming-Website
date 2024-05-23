import Header from './Header/Header';
import Content from './Content/Content';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';
import SearchResultsList from './SearchResultsList/SearchResultsList';
import { useState } from 'react';

const App = () => {

   const [results, setResults] = useState([])


     return (
 <>
    <Header/>
    <Outlet/>
    <Content/>
    <SearchBar setResults={setResults}/>
    <SearchResultsList results={results}/>
    <Footer/> 
    </>
  )
}

export default App;

