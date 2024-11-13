import React from 'react';
import {View, Text, Image, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from '../../components';
import {T_HOME} from './home.types';
import {styles} from './home.styles';
import {getImageUrl} from '../../config/utils';
import {images} from '../../assets/images';
// import useAppTheme from '../../hooks/useAppTheme';
import {useGetUpcomingMoviesAPI} from '../../api/public';

const Home: React.FC<T_HOME> = ({navigation}) => {
  // const {colors} = useAppTheme();

  const {data: moviesData} = useGetUpcomingMoviesAPI();

  const handleCardPress = (item: any) => {
    navigation.navigate('DetailsScreen', {
      movie: item,
    })
  };

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  const renderMovieCard = (movie: any) => {
    const {item, index} = movie;
    return (
      <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.cardContainer}>
        <ImageBackground imageStyle={styles.posterImageStyle} style={styles.moviePoster} source={{uri: getImageUrl(item.backdrop_path)}}>
          <Text style={styles.titleText}>{item.original_title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Watch</Text>
        <TouchableOpacity onPress={handleSearchPress}>
          <Image style={styles.searchIcon} source={images.Search} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={moviesData?.results}
          renderItem={renderMovieCard}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;