import React from 'react';
import styled from 'styled-components';

// auto will replace remaining content with space
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

export default function() {
  return (
    <Bar>
      <div> Cryptos </div>
      <div />
      <div> Dashboard </div>
      <div> Settings </div>
    </Bar>
  );
}
