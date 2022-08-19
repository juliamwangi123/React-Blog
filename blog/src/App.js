import Navbar from './Navbar';
import Home  from './Home';
import LifeStyle from './Lifestyle'
import BlogDetails from './BlogDetail';
import Create from './Create';
import Fashion from './Fashion';
import Street from './Street';
import {BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path ='/fashion' element= {<LifeStyle/>} />
        <Route path ='blogs/:id' element={<BlogDetails/>} />
        <Route path='/addblog'  element={<Create/>}/>
        <Route path= '/lifestyle' element={<Fashion/>} />
        <Route path='/street' element={<Street/>}/>

      </Routes>
</BrowserRouter>
     
    
    </div>
  );
}

export default App;
