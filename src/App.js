import React from "react";
import { reducer } from "./store/reducer";
import { SearchBar } from "./components/SearchBar/index";
import { WeatherDisplay } from "./components/WeatherDisplay/index";
import { HistoryDisplay } from "./components/HistoryDisplay/index";
import "./App.css";

const initialState = {
  isLoading: false,
  weather: undefined,
  history: [],
};

export const StoreContext = React.createContext(initialState);

const Provider = StoreContext.Provider;

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <div className="App">
        <h2 className="App-title">Today's weather</h2>
        <SearchBar />
        <WeatherDisplay />
        <h2 className="App-title">Search history</h2>
        <HistoryDisplay />
      </div>
    </Provider>
  );
}

export default App;
