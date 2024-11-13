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
    F_10: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: fontPixel(10),
    },
    F_14: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: fontPixel(14),
    },
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
    F_10: {
      fontFamily: FONT_VARIANTS.REGULAR,
      fontSize: fontPixel(10),
    },
    F_12: {
      fontFamily: FONT_VARIANTS.REGULAR,
      fontSize: fontPixel(12),
    },
    F_14: {
      fontFamily: FONT_VARIANTS.REGULAR,
      fontSize: fontPixel(14),
    },
    F_16: {
      fontFamily: FONT_VARIANTS.REGULAR,
      fontSize: fontPixel(16),
    },
  },
  BOLD: {
    F_12: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: fontPixel(12),
    },
  },
};
