import Header from './Header/Header';
import Content from './Content/Content';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
 <>
    <Header/>
    <Outlet/>
    <Content/>
    </>
  )
}
export default App;

