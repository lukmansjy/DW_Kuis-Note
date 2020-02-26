import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      notes: [],
      item: ''
    }
  }

  handleChange = (event)=>{
    this.setState({
      item: event.target.value
    })
  }

  handleAdd = ()=>{
    this.setState({
      notes: [...this.state.notes, this.state.item],
      item: ''
    })
  }

  render(){
    return(
      <div>
        <input onChange={(event)=> this.handleChange(event)} value={this.state.item} />
        <button onClick={() => this.handleAdd()}>Add</button>
        <ul>
          {
            this.state.notes.map( (note) =>{
              return(<li>{note}</li>)
            } )
          }
        </ul>
      </div>
    )
  }
}

export default App;
