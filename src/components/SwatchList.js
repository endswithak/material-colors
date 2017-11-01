import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-sketchapp';
import Swatch from './Swatch';
import SwatchListHeader from './SwatchListHeader';

const SwatchList = ({ colors, name }) => (
  <View
    name={name}
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 360,
      margin: 10
    }}
  >
    <SwatchListHeader name={name} hex={colors['500']} />

    {Object.keys(colors).map(color => (
      <Swatch name={color} hex={colors[color]} key={color} />
    ))}
  </View>
);

SwatchList.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired
};

export default SwatchList;
