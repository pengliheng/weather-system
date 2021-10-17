import React from 'react'
import { reducer } from './store/reducer';
import { SearchBar } from './components/SearchBar/index'
import { WeatherDisplay } from './components/WeatherDisplay/index'
import { HistoryDisplay } from './components/HistoryDisplay/index'
import './App.css';

const initialState = {
  isLoading: false,
  weather: undefined,
  history: []
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div className="App">
      <h2 className="App-title">Today's weather</h2>
      <SearchBar dispatch={dispatch} />
      <WeatherDisplay data={state} />
      <h2 className="App-title">Search history</h2>
      <HistoryDisplay data={state.history} dispatch={dispatch} />
    </div>
  );
}

export default App;
