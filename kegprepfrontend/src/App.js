import './App.css';
import  Search from "./search"
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {useEffect} from 'react';
import Dish from './recipe';



export default function App() {
  return (  
    <div className="App">
<BrowserRouter>
<Routes>
<Route exact path="/" element={<Search/>}/>
<Route path="/dish" element={<Dish/>}/>
</Routes> 
</BrowserRouter> 
    
    </div>
  );
  
}



