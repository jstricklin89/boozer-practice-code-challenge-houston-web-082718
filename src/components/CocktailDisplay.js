import React from 'react'

const CocktailDisplay = (props) => {
  const { cocktail, ingredients, proportions } = props
  function renderLis() {
    let lis = []
    for (let i = 0; i < proportions.length; i++) { 
    lis.push(<li key={i}>{proportions[i].amount}- {ingredients[i].name}</li> )
    }
    return lis
}
  return (
    <div id="cocktail-display">
      <h1>{cocktail.name}</h1>
      <h3>{cocktail.description}</h3>
      <p>{cocktail.instructions}</p>
      <h4>Ingredients</h4>
      { proportions.length > 0 ? 
        <ul>
        {renderLis()}
        </ul>
        : null
      } 
    </div>
  )
}

export default CocktailDisplay
