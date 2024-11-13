import {useQuery} from '@tanstack/react-query';
import {axiosClient} from '../axiosClient';
import {ROUTES} from '../routes';
import {envConfig} from '../../config/envConfigs';

export const useGetUpcomingMoviesAPI = () => {
  return useQuery({
    queryKey: ['upcomingMoviesAPI'],
    queryFn: async (): Promise<any> =>
      await axiosClient.get(`${ROUTES.UPCOMING}?api_key=${envConfig.API_KEY}`),
  });
};

export const useGetMovieDetailsAPI = (movieId: number) => {
  return useQuery({
    queryKey: [`movie_${movieId}_DetailsAPI`],
    queryFn: async (): Promise<any> =>
      await axiosClient.get(
        `${ROUTES.MOVIE}/${movieId}?api_key=${envConfig.API_KEY}&append_to_response=videos`,
      ),
  });
};

export const useGetMovieImagesAPI = (movieId: number) => {
  return useQuery({
    queryKey: [`movie_${movieId}_ImagesAPI`],
    queryFn: async (): Promise<any> =>
      await axiosClient.get(
        `${ROUTES.MOVIE}/${movieId}/images?api_key=${envConfig.API_KEY}`,
      ),
  });
};

export const useGetGenresAPI = () => {
  return useQuery({
    queryKey: ['genresAPI'],
    queryFn: async (): Promise<any> =>
      await axiosClient.get(`${ROUTES.GENRES}?api_key=${envConfig.API_KEY}`),
  });
};
