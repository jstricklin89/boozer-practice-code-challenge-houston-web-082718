import React from 'react'

const Cocktail = (props) => {
  return (
    <li onClick={(event) => props.displayCocktail(event.target.innerText)}>{props.cocktail.name}</li>
  )
}

export default Cocktail
