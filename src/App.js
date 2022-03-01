//import './App.css';
import './fonts/fonts.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import ItHeroes from './Components/Layouts/main/ItHeroes';
function App() {
   return (
      
         <BrowserRouter>
            <div className="container-fluid App">
               
               <ItHeroes/>
               <Routes>
               </Routes>
            </div>
         </BrowserRouter>
   );
}

export default App;
