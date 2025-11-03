import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <article className="coin-card">
        <div className="coin-header">
          <img src={coin.image} alt={coin.name} className="coin-image" />
          <h2>{coin.name}</h2>
          <p> ({coin.symbol.toUpperCase()})</p>
        </div>
        <p>Price: ${coin.current_price.toLocaleString()}</p>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }
        >
          Change for 24h: {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className="market-cap">
          Market Cap: ${coin.market_cap.toLocaleString()}
        </p>
        {/* <Link to={`/coin/${coin.id}`}>more info...</Link> */}
      </article>
    </Link>
  );
};

export default CoinCard;
