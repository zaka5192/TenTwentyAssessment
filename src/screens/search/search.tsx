import React, {useState} from 'react';
import {View, Text, Image, FlatList, ImageBackground} from 'react-native';
import {ScreenWrapper, KeyboardAwareView, ButtonInput} from '../../components';
import {T_SEARCH_ROUTE_PARAMS} from './search.types';
import {useGetGenresAPI} from '../../api/public';
import {styles} from './search.styles';
import {images} from '../../assets/images';
import {getGenreImageUrl} from '../../config/utils';

const Search: React.FC<T_SEARCH_ROUTE_PARAMS> = ({navigation}) => {

  const {data} = useGetGenresAPI();
  const genreData = data?.genres;
  console.log('genreData: ', genreData);

  const [search, setSearch] = useState<string>('');

  const renderGenreCard = (genre: any) => {
    const {item, index} = genre;
    return (
      <View style={styles.genreCard}>
        <ImageBackground source={{uri: getGenreImageUrl(item.id)}} style={styles.genreBgStyle} imageStyle={styles.genreImageStyle}>
          <Text style={styles.genreCardText}>{item.name}</Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareView>
        <View style={styles.topContainer}>
          <ButtonInput
            placeholder="TV shows, movies and more"
            value={search}
            iconLeft={
              <Image
                source={images.Search}
                style={styles.searchIcon}
              />
            }
            icon={
              <Image
                source={images.Close}
                style={styles.closeIcon}
              />
            }
            onButtonClick={() => setSearch('')}
            onChangeText={setSearch}
          />
        </View>
        <View>
          <FlatList
            numColumns={2}
            data={genreData}
            renderItem={renderGenreCard}
            columnWrapperStyle={styles.columnStyle}
          />
        </View>
      </KeyboardAwareView>
    </ScreenWrapper>
  );
};

export default Search;