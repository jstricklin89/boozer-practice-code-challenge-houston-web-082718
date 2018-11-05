import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    const { cocktailList, displayCocktail } = this.props
    return (
      <div id="cocktail-list" style={{"height": "300px"}}>
        {cocktailList.map(cocktail => {
        return <Cocktail key={cocktail.id} cocktail={cocktail} displayCocktail={displayCocktail} />})}
      </div>
    )
  }
}

export default CocktailsList
