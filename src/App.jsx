import Header from './Header/Header';
import Content from './Content/Content';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  return (
 <>
 
    <Header/>
    <SearchBar/>
    <Outlet/>
    <Content/>
    <Footer/>
    
    </>
  )
}

export default App;

