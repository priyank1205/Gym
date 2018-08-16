import React, { Component } from 'react';
import './App.css';
import NutritionCard from './NutritionCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NutritionCard type="Proteins" />
        <NutritionCard type="Calories" />
      </div>
    );
  }
}

export default App;
