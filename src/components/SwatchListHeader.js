import React from 'react';
import { Text, View } from 'react-sketchapp';
import PropTypes from 'prop-types';
import { textColor, titleCase } from '../utils';
import Swatch from './Swatch';

const SwatchListHeader = ({ name, hex }) => (
  <View
    name={name}
    style={{
      width: 360,
      backgroundColor: hex,
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}
  >
    <View style={{
      width: 360,
      paddingTop: 10,
      paddingBottom: 0,
      paddingLeft: 15,
      paddingRight: 15,
    }}>
      <Text
        name="Swatch Name"
        style={{
          color: textColor(hex),
          fontFamily: 'Roboto Medium',
          fontSize: 14,
          lineHeight: 24,
          marginBottom: 53
        }}
      >
        {titleCase(name)}
      </Text>
    </View>
    <Swatch name='500' hex={hex} />
  </View>
);

SwatchListHeader.propTypes = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SwatchListHeader;
