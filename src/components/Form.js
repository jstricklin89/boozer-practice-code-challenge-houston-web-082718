import React, { Component } from 'react'

class Form extends Component {
  state = {
    ingredientCount: []
  }
  clickHandler = (event) => {
    event.preventDefault()
    const state = this.state
    this.setState({ ingredientCount: [...state.ingredientCount, state.ingredientCount.length + 1] })
  }
  render(){
    const ingredientRows = [...this.state.ingredientCount].map(i => {
      return <div key={i} className="container">
      <p>Ingredient Name<br/>
      <input name={i} type="text"/>
      </p>

      <p>Quantity<br/>
      <input id={i} type="text"/>
      </p>
    </div>
    })
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text"/>

        <p>Description</p>
        <input type="text"/>

        <p>Instructions</p>
        <input type="text"/>

        <h3>Proportions</h3>
        {
          ingredientRows
        }
        {/* <div className="container">
          <p>Ingredient Name<br/>
          <input type="text"/>
          </p>

          <p>Quantity<br/>
          <input type="text"/>
          </p>
        </div> */}

        <p><button onClick={(event) => this.clickHandler(event)} > + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
