import { QueryClient } from "@tanstack/react-query";
import Axios, { AxiosInstance } from "axios";
import { baseUrl } from "./useBaseUrl";

export const API_URL = 'https://api.themoviedb.org/3/'

// export const queryClient = new QueryClient();
export const api: AxiosInstance = Axios.create({
  baseURL: API_URL,
});


api.interceptors.request.use(async (config) => {
//   const token = await storageService.getItem<string>("token");
  if (true) {
    config.headers.Authorization = "Bearer " + '';
  }
  return config;
});

export const getGenreMovies = async () => {
  return await api
    .get(baseUrl('genre/movie/list?language=pt-br'))
    .then((response) => {
      return response?.data?.genres;
    })
    .catch((error) => {
      throw error;
    });
};