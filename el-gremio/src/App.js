import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"




function App() {
  return (
  
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/juegos/:categoria" element={<ItemListContainer/>}/>
        <Route path="/detalles/:itemId" element={<ItemDetailContainer/>}/>
        {/* <Route path="" element={}/> */}



      </Routes>
      
      
    

    </BrowserRouter>

    
  );
}

export default App;
