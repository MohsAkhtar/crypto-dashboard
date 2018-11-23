import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDisplay(coinList, topSection) {
  // don't want to display all 1000 images
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection).map(coinKey => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
