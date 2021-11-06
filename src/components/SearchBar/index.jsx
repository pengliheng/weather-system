import React from "react";
import axios from "axios";
import "./index.css";
import { StoreContext } from "../../App";

export function SearchBar() {
  const { dispatch } = React.useContext(StoreContext);
  const [city, setCity] = React.useState("singapore");
  const [country, setCountry] = React.useState("singapore");
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "loading" });
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: city,
          // country,
          appid: "7852f059758162bcc8f748aaf08ad43b",
        },
      })
      .then((res) => {
        const weather = {
          ...res.data,
          city,
          country,
          time: Date.now(),
        };
        dispatch({ type: "success", payload: weather });
        dispatch({
          type: "addHistory",
          payload: { city, country, time: Date.now() },
        });
      })
      .catch((err) => {
        dispatch({ type: "error" });
      });
  }
  function handleClear(e) {
    e.preventDefault();
    setCity("");
    setCountry("");
  }
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label name="city">
        City: <input value={city} onInput={(e) => setCity(e.target.value)} />
      </label>
      <label name="country">
        Country:{" "}
        <input value={country} onInput={(e) => setCountry(e.target.value)} />
      </label>
      <button>Submit</button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
}
