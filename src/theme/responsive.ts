import {Dimensions, PixelRatio, Platform} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const widthBaseScale = screenWidth / 375;
const heightBaseScale = screenHeight / 812;

function normalize(size: number, based?: 'width' | 'height') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

//for width  pixel
const wp = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const hp = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: number) => {
  return hp(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return hp(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return wp(size);
};
//for full screen Height
const fullHeight = screenHeight;
const fullWidth = screenWidth;
export {
  wp,
  hp,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  fullHeight,
  fullWidth,
};
