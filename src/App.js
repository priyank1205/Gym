import React, { Component } from 'react';
// import './App.css';
import './App_new.css';
import NutritionCard from './NutritionCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NutritionCard type="Proteins" unit="grams"/>
        <NutritionCard type="Calories" unit="kCal"/>
      </div>
    );
  }
}

export default App;
