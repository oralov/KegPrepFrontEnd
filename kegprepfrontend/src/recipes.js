import React from "react";
import './Recipe.css'
import {useNavigate } from "react-router-dom";


export default function Recipes(props){


  const navigate = useNavigate();
  function handleClick (event){
    props.data.forEach((element) => {
      if(element.Name === event.target.value){
      console.log(element.Name)
    
    navigate('/dish', {state: 
      {data: element}
    })
    }  
  })
  }

    if(props.data[0] !== undefined){

        props.data.sort(function (a, b) {
            if (a.Name < b.Name) {
              return -1;
            }
            if (a.Name > b.Name) {
              return 1;
            }
            return 0;
          });

     var leftOver = props.data.reduce(function(result, element){
        if(element.Name.substr(0, props.text.length) === props.text ){
         result.push(element)
        }
        return result
     }, [])

     return(

        <div id="buttonContainer">
            <p></p>
         {leftOver.map(function (element){return <button id="button" onClick={handleClick} value={element.Name}>{element.Name}</button>})}
        
        </div>
    )
    }
}


