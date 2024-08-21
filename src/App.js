
import './App.css';
import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="main">
     <h2>Crud Operation</h2>

     <BrowserRouter>
     <Routes>

     <Route exact path='/' element={<Create />} />


      <Route exact path='/create' element={<Create />}/>
      <Route exact path='/read' element={<Read  />}/>
      <Route exact path='/update' element={ <Update />}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
