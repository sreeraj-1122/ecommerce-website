import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mens from './components/shop/Mens';
import Shop from './components/Shop';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import ProductCategory from './components/ProductCategory';
export const Newcontext = createContext();
function App() {
  const [product,setProduct]=useState([])
  useEffect(()=>{
      axios.get('https://dummyjson.com/products?limit=0').then((response)=>{
        console.log(response.data.products);
        setProduct(response.data.products)
      })  
  },[])
  return (
    <div >
      <Newcontext.Provider value={{product,setProduct}}>
      <BrowserRouter  >
      <Header/>

        <Routes>
          <Route path='/ecommerce-website' element={<Shop/>}/>
          <Route path='/product/:category' element={<ProductCategory/>}/>
          {/* <Route path='/men' element={<Shop/>}/> */}
        </Routes>
      </BrowserRouter>
      </Newcontext.Provider>
     
    </div>
  );
}

export default App;
