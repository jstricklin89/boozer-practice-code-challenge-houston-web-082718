import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  state = {
    cocktails: [],
    ingredients: [],
    proportions: [],
    cocktailObj: '',
    cocktailProps: [],
    cocktailIngs: []
  }

  // cocktail = cocktails.find( cocktail.id == this.state.cocktailToDisplay)
// proportions = [...this.state.proportions].filter(p => p.cocktail_id === cocktail.id)
// ingredient_names = proportions.map(p => this.state.ingrendsts.find(i => i.id === p.ingredientId)).map(i => i.name)

  componentDidMount () {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(r => r.json())
    .then(cocktails => this.setState({ cocktails }))
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
    .then(r => r.json())
    .then(ingredients => this.setState({ ingredients }))
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
    .then(r => r.json())
    .then(proportions => this.setState({ proportions }))
  }

  displayCocktail = (cocktail) => {
    const cocktailObj = [...this.state.cocktails].find(drink => drink.name === cocktail)
    const proportions = [...this.state.proportions].filter(p => p.cocktail_id === cocktailObj.id)
    const ingredients = [...proportions].map(p => {
      return [...this.state.ingredients].find(ing => ing.id === p.ingredient_id)
    })

    this.setState({
      cocktailObj,
      cocktailProps: proportions,
      cocktailIngs: ingredients
    })
  }

  render(){
    const { cocktails } = this.state
    return (
      <div className="container">
        <CocktailsList cocktailList={cocktails} displayCocktail={this.displayCocktail} />
        <CocktailDisplay cocktail={this.state.cocktailObj} proportions={this.state.cocktailProps} ingredients={this.state.cocktailIngs} />
        <Form />
      </div>
    )
  }
}

export default CocktailsContainer
