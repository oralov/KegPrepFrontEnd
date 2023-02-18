import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Recipe(props){

    const navigate = useNavigate();
  const location = useLocation();

  let stepCount = 1;
  return (
      <div>
      <h2>{location.state.data.Name} </h2>
      <p id="warning">Prior to beginning prep, thoroughly wash hands and sanitize all surfaces and equipment</p>
      <div>
     <h3>Ingredients:</h3>
     {
  location.state.data.Ingredients?.map(function (element){return <p className="ings">{element.Name} - {element.Amount} {element.Measure}</p>})
  }
  <div>
  <h4>Shelf life: <span>{location.state.data.ShelfLife}</span></h4> 
  <h4>Yield: <span>{location.state.data.Yield}</span></h4> 
  </div>
  <div>
  <h3>Note:</h3>
  <p className="note">{location.state.data.Note}</p>
  <h3>Steps:</h3>
  {location.state.data.Steps?.map(function (element){return <p className="steps">{stepCount++}. {element}</p>})}
  </div>
  <div>
  <h3>Storage:</h3>
  <p className="storage">{location.state.data.Storage}</p>
  <p></p>
  </div>
    </div>
      </div>
  )
}