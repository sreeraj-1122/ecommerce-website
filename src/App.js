import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mens from './components/Mens';
import Shop from './components/shop/Shop';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path='/' element={<Shop/>}/>
          {/* <Route path='/men' element={<Shop/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
