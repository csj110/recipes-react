import React, { Component } from 'react';
import './App.css';
import {recipesAll } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
class App extends Component {
  state={
    recipes:recipesAll.recipes,
    url: 'https://www.food2fork.com/api/search?key=e73964be848dd84d7d8c5501b437b8cd',
    detail_id: 35382,
    pageIndex:1,
  }
  // async getRecipes(){
  //   try{
  //     const data= await fetch(this.state.url);
  //     const jsonData=await data.json();
  //     this.setState({
  //       recipes:jsonData.recipes
  //     })

  //   } catch(error){
  //     console.log(error)
  //   }

  // }
  // componentDidMount(){
  //   this.getRecipes();
    
  // }

  // componentDidMount(){
  //   this.setState({
  //     recipes:recipesAll.recipes
  //   })
  // }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return <RecipeList recipes={this.state.recipes} handleDetail={this.handleDetail}/>
      case 0:
        return <RecipeDetails id={this.state.detail_id}
          handleIndex={this.handleIndex}/>
    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex:index
    })
  }

  handleDetail = (index, id) => {
    this.setState({
      pageIndex: index,
      detail_id:id,
    })
  }

  render() {
    console.log(this.state.recipes)
    return (
      <React.Fragment>
        {
          this.displayPage(this.state.pageIndex)
        }
      </React.Fragment>
    );
  }
}


export default App;