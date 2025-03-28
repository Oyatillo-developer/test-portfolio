import { Routes, Route } from "react-router-dom";
import Bar from "./page/bar";
import Home from "./page/home";
import Skil from "./page/skil";
import Abaut from "./page/abaut";
import Contact from "./page/kontakt";


function Proyect() {
    return ( <>
    <Routes>
        <Route path="/" element={<> <Bar/> <Home/> <Skil/> <Abaut/> <Contact/> </>}/>
    </Routes>
    </> );
}

export default Proyect;