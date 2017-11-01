import chroma from 'chroma-js';

export const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 3.2) {
    return 'rgba(255,255,255,1)';
  }
  return 'rgba(0,0,0,0.87)';
};

export const titleCase = (str) => {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
