import React from "react";
import moment from "moment";
import axios from "axios";
import { FaSistrix } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./index.css";
import { StoreContext } from "../../App";

export function HistoryDisplay() {
  const { state, dispatch } = React.useContext(StoreContext);
  function handleSearch({ city, country }) {
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
      })
      .catch((err) => {
        dispatch({ type: "error" });
      });
  }
  function handleDelete(history) {
    dispatch({ type: "deleteOneHistory", payload: history });
  }
  if (state.history.length > 0) {
    return (
      <div className="history">
        {state.history.map((history, i) => (
          <p className="history-item" key={i}>
            <span className="history-item-left">
              {i + 1}. {history.city}, {history.country}
            </span>
            <span className="history-item-right">
              {moment(history.time).format("HH:mm:ss A")}
              <FaSistrix
                className="history-icon"
                onClick={() => handleSearch(history)}
              />
              <RiDeleteBin5Line
                className="history-icon"
                onClick={() => handleDelete(history)}
              />
            </span>
          </p>
        ))}
      </div>
    );
  }
  return <div className="history-no-record">No Record</div>;
}
