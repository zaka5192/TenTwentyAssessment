import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, Image, Modal, Alert, Platform, ActivityIndicator, ImageBackground, TouchableOpacity} from 'react-native';
import {ScreenWrapper, KeyboardAwareView, AppButton} from '../../components';
import {T_DETAILS_ROUTE_PARAMS} from './details.types';
import {styles} from './details.styles';
import {images} from '../../assets/images';
import Video from "react-native-video";
import {getImageUrl, getGenreColor} from '../../config/utils';
import {useGetMovieDetailsAPI} from '../../api/public';
import {appColors} from '../../theme';

const DetailsScreen: React.FC<T_DETAILS_ROUTE_PARAMS> = ({navigation, route}) => {

  const {movie} = route?.params;

  const {data: movieDetails} = useGetMovieDetailsAPI(movie.id);
  // console.log('movieDetails: ', movieDetails);

  const [genres, setGenres] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [trailelUrl, setTrailerUrl] = useState<string>('');
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  useEffect(() => {
    if (movieDetails && movieDetails.genres && movieDetails.genres.length) {
      setGenres(movieDetails.genres);
    }
    if (movieDetails && movieDetails.videos && movieDetails.videos.results && movieDetails.videos.results.length) {
      setTrailerUrl('https://res.cloudinary.com/dxq9ddyd0/video/upload/v1721651377/samples/elephants.mp4');
      setIsPaused(false);
    }
  }, [movieDetails]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderGenres = useMemo(() => {
    return (
      <View style={styles.genreMainContainer}>
        <Text style={styles.headerText}>Genres</Text>
        <View style={styles.genresContainer}>
        {genres.map((genre: any, index: number) => (
          <View style={[styles.genreItem, {backgroundColor: getGenreColor(genre.name)}]} key={index.toString()}>
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        ))}
      </View>
      </View>
    );
  }, [genres]);

  const renderOverview = useMemo(() => {
    return (
      <View style={styles.genreMainContainer}>
        <Text style={styles.headerText}>Overview</Text>
        <Text style={styles.overviewText}>{movie.overview}</Text>
      </View>
    );
  }, []);

  return (
    <ScreenWrapper>
      <KeyboardAwareView>
        <View style={styles.posterContainer}>
          <ImageBackground style={styles.posterStyle} source={{uri: getImageUrl(movie.poster_path)}}>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButtonContainer}>
              <Image style={styles.backIcon} source={images.Back} />
              <Text style={styles.watchText}>Watch</Text>
            </TouchableOpacity>
          </ImageBackground>
          <AppButton
            style={styles.ticketsBtn}
            width={'90%'}
            buttonTitle='Get Tickets'
            onPress={() => console.log('get tickets')}
          />
          <AppButton
            style={styles.watchBtn}
            width={'90%'}
            variant='outlined'
            titleColor={appColors.white}
            buttonTitle='Watch Trailer'
            onPress={() => setShowVideoModal(true)}
          />
        </View>
        <View style={styles.infoContainer}>
          {renderGenres}
          {renderOverview}
        </View>
      </KeyboardAwareView>
      {!showVideoModal ? null : (
        <Modal visible={showVideoModal} onRequestClose={() => setShowVideoModal(false)} animationType="slide">
          <ScreenWrapper>
            <TouchableOpacity onPress={() => setShowVideoModal(false)}>
              <Text>
                Done
              </Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
            {isLoading && (
                <View style={styles.main}>
                  <ActivityIndicator size={"large"} color={appColors.white} />
                </View>
              )}
              {
                (isPaused || Platform.OS === "android") &&
                <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
                  <View style={styles.pausedView}>
                    {
                      isPaused && !isLoading &&
                      <Text style={styles.genreText}>Resume</Text>
                    }
                  </View>
                </TouchableOpacity>
              }
              <Video
                onLoadStart={() => setIsLoading(true)}
                onLoad={() => setIsLoading(false)}
                source={{uri: trailelUrl}}
                minLoadRetryCount={3}
                controls={true}
                onEnd={() => setShowVideoModal(false)}
                paused={isPaused}
                onError={(e: any) => {
                  setIsLoading(false);
                  Alert.alert(e?.error?.localizedFailureReason
                    ? e?.error?.localizedFailureReason : "error loading video")
                }}
                fullscreen={true}
                resizeMode="contain"
                style={styles.videoContainer}
              />
            </View>
          </ScreenWrapper>
        </Modal>
      )}
    </ScreenWrapper>
  );
};

export default DetailsScreen;