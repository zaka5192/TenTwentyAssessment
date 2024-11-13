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

export function getGenreImageUrl(genreId: number) {
  switch (genreId) {
    case 28:
      return 'https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg';
    case 12:
      return 'https://image.tmdb.org/t/p/original/vJk9DOLgP23jO5mBnPHE93MFgYu.jpg';
    case 16:
      return 'https://image.tmdb.org/t/p/original/yNU8UF3DOmv3G9gVNAj34beclTG.jpg';
    case 35:
      return 'https://image.tmdb.org/t/p/original/cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg';
    case 80:
      return 'https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg';
    case 99:
      return 'https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg';
    case 18:
      return 'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg';
    case 10751:
      return 'https://image.tmdb.org/t/p/original/h9YlRHAZWOWtGonllmj6JJg1FrE.jpg';
    case 14:
      return 'https://image.tmdb.org/t/p/original/cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg';
    case 36:
      return 'https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg';
    case 27:
      return 'https://image.tmdb.org/t/p/original/4yrOyO3N55XazHQXXYoqiiPQd40.jpg';
    case 10402:
      return 'https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg';
    case 9648:
      return 'https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg';
    case 10749:
      return 'https://image.tmdb.org/t/p/original/9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg';
    case 878:
      return 'https://image.tmdb.org/t/p/original/pysPTtYmTcQBlShcxXZwfs3Zp8H.jpg';
    case 10770:
      return 'https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg';
    case 53:
      return 'https://image.tmdb.org/t/p/original/xx0VTrtvoRptaY3unl61Ecft8MI.jpg';
    case 10752:
      return 'https://image.tmdb.org/t/p/original/en3GU5uGkKaYmSyetHV4csHHiH3.jpg';
    case 37:
      return 'https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg';
    default:
      return 'https://image.tmdb.org/t/p/original/yNU8UF3DOmv3G9gVNAj34beclTG.jpg';
  }
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
