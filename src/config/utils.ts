import Toast from 'react-native-toast-message';
import {appColors} from '../theme';

export const showToast = (
  title?: string,
  message?: string,
  type?: 'success' | 'error' | 'warning',
) => {
  Toast.show({
    text1: title ? title : 'Success',
    text2: message ? message : 'Okay',
    position: 'top',
    type: type ? type : 'success',
    swipeable: true,
    autoHide: true,
    visibilityTime: 5000,
  });
};

export function getImageUrl(imagePath: string) {
  return `https://image.tmdb.org/t/p/original${imagePath}`;
}

export function getGenreColor(genreName: string) {
  if (genreName === 'Action' || genreName === 'Comedy') {
    return appColors.tmdbGreen;
  } else if (genreName === 'Thriller' || genreName === 'Horror') {
    return appColors.tmdbGrey;
  } else if (genreName === 'Science' || genreName === 'Drama') {
    return appColors.tmdbPurple;
  } else if (genreName === 'Fiction' || genreName === 'Animation') {
    return appColors.tmdbGold;
  } else if (genreName === 'Romance' || genreName === 'Fantasy') {
    return appColors.tmdbPink;
  } else {
    return appColors.tmdbBlue;
  }
}
