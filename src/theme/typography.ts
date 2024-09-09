import {fontPixel} from './responsive';

export const FONT = 'Poppins';

export const FONT_VARIANTS = {
  BLACK: `${FONT}-Black`,
  MEDIUM: `${FONT}-Medium`,
  REGULAR: `${FONT}-Regular`,
  BOLD: `${FONT}-Bold`,
};

export const typography = {
  BLACK: {
    F_16: {
      fontFamily: FONT_VARIANTS.BLACK,
      fontSize: fontPixel(16),
    },
  },
  MEDIUM: {
    F_16: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: fontPixel(16),
    },
    F_18: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: fontPixel(18),
    },
  },
  REGULAR: {
    F_12: {
      fontFamily: FONT_VARIANTS.REGULAR,
      fontSize: fontPixel(12),
    },
  },
  BOLD: {
    F_12: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: fontPixel(12),
    },
  },
};
