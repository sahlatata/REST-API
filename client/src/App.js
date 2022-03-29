import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Home from './component/Home';
import ListProduct from './component/ListProduct';
import NavProduct from './component/NavProduct';

function App() {
  return (
    <div>
      <NavProduct/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ListProduct/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/UptadeProduct/:id' element={<EditProduct/>}/>  
      </Routes>
    </div>
  );
}

export default App;
