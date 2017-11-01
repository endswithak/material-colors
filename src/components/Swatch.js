import React from 'react';
import { Text, View } from 'react-sketchapp';
import PropTypes from 'prop-types';
import { textColor } from '../utils';

const Swatch = ({ name, hex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 45,
      width: 360,
      backgroundColor: hex,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between'
    }}
  >
    <Text
      name="Swatch Name"
      style={{
        color: textColor(hex),
        fontFamily: 'Roboto Mono Medium',
        lineHeight: 24,
        fontSize: 14
      }}>
      {name}
    </Text>
    <Text
      name="Swatch Hex"
      style={{
        color: textColor(hex),
        fontFamily: 'Roboto Mono',
        lineHeight: 24,
        textAlign: 'right',
        fontSize: 14
      }}>
      {hex}
    </Text>
  </View>
);

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;

export default Swatch;
