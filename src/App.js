import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mens from './components/Mens';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path='/mens' element={<Mens/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
