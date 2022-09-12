import React, { Component } from 'react';
import List from './Components/List';
import axios from 'axios';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
        people: [],
    }

    this.getPeople = this.getPeople.bind(this);
  }

  getPeople(){
    return axios.get('https://swapi.dev/api/people')
    .then((res) => {
        this.setState( { people: res.data.results } )
    })
  }

  componentDidMount(){
    this.getPeople()
  }
  render(){
    const {people} = this.state;
    return (
        <div className="App">
            <List people={people} />
        </div>
    );
  }
}

export default App;
