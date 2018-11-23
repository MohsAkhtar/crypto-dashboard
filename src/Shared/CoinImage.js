import React from 'react';

// if no style passed in it defaults to height: '50px';
export default function({ coin, style }) {
  return (
    <img
      alt={coin.CoinSymbol}
      style={style || { height: '50px' }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
