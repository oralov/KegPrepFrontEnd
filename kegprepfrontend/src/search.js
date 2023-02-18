
import React from "react";
import axios  from "axios";
import Recipe from './recipe';
import './Recipe.css'
import Recipes from './recipes';



class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '',
                      data: {},
                      data1: {}}

    
        this.handleChange = this.handleChange.bind(this);
        this.handleAction = this.handleAction.bind(this);
      }

    handleAction() {
        axios.get('http://leaf-subsequent-arrow.glitch.me/recipes/' + this.state.value).then(resp => {this.setState({data: resp.data})});
        
        this.setState({showRecipe: true});
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      componentDidMount(){
        axios.get('http://leaf-subsequent-arrow.glitch.me/recipes').then(resp => {this.setState({data1: resp.data})})
      }

      
   render(){
    return(
      
      
    
    <div id="searchBar"> 

    <input type="text" placeholder="Enter Recipe Name" onChange={this.handleChange}/>
   <Recipes data ={this.state.data1} text = {this.state.value}/> 

    
    </div>
   )
   
    }
}
export default Search;