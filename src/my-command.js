import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard } from 'react-sketchapp';
import SwatchList from './components/SwatchList';
import { colorPalettes } from './colors';

const Document = () => (
  <Artboard
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 380 * 8
    }}
  >
    {
      colorPalettes.map((palette, index) => {
        return <SwatchList colors={palette.colors} name={palette.primary} key={index} />
      })
    }
  </Artboard>
);

export default () => {

  render(<Document />, context.document.currentPage());
};
