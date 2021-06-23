import React, { useEffect, useState } from "react";
import axios from "axios";
import DarkModeToggle from "react-dark-mode-toggle";

import Coin from "./Coin";
import "../styles/index.css";

function Main() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterData = data.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={!isDarkMode ? "coin-app" : "dark-app"}>
      <h1 className="search-text">CRYPTO</h1>

      <div className="coin-search">
        <input
          type="text"
          onChange={handleChange}
          name="search"
          placeholder="Search"
          className={!isDarkMode ? "light-input" : "coin-input"}
        />
        <DarkModeToggle
          speed={1}
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          size={80}
        />
      </div>
      <div className="coin-container">
        <div className={!isDarkMode ? "header-light" : "header-dark"}>
          <div className="currency">
            <h1>CURRENCY</h1>
          </div>
          <div className="coin-data">
            <h1 className="coin-price">PRICE</h1>
            <h1 className="coin-volume">VOLUME</h1>
            <h1 className="coin-percent">%</h1>
            <h1 className="coin-marketcap">Mkt Cap</h1>
          </div>
        </div>
      </div>
      {filterData.map((coin) => (
        <Coin
          coinName={coin.name}
          marketcap={coin.market_cap}
          key={coin.id}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
          price={coin.current_price}
        />
      ))}
    </div>
  );
}

export default Main;
