import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

function getCoinsToDisplay(coinList) {
  // don't want to display all 1000 images
  return Object.keys(coinList).slice(0, 100);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList).map(coinKey => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
