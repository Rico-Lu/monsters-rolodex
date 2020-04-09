import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    
    // this.state = {
    //   monsters: [
    //     {name: 'Frankenstein', id: 'asc1'},
    //     {name: 'Dracula', id: 'asc2'},
    //     {name: 'Zombie', id: 'asc3'}
    //   ]
    // }
    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
    
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => console.log(response.json()));
    
  // }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    //console.log(this.state.monsters[0]);
    
    return (
      <div className="App">
        {/* <input type='search' 
                placeholder='search monsters' 
                onChange={e => {
                  this.setState({searchField: e.target.value}, () => console.log(this.state));
                  //console.log(this.state)
                }}/> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
        
        <CardList monsters={filteredMonsters}/>

        {/* <h1>{this.state.monsters[1].name}</h1> */}
      </div>
    );
  }
}



export default App;
