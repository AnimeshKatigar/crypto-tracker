import React from "react";
import '../styles/index.css';

const Coin = ({
  image,
  coinName,
  priceChange,
  symbol,
  marketcap,
  price,
  volume,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img alt="coin-img" src={image} />
          <h1>{coinName}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p
            className={
              priceChange < 0 ? "coin-percent red" : "coin-percent green"
            }
          >
            {priceChange.toFixed(2)} %
          </p>
          <p className="coin-marketcap">
             ${marketcap}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
