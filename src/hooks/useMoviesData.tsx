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
    config.headers.Authorization = "Bearer " + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM2MjcyZGM0OTRmYmM4MTY1NDM3ZGQ1ZmU2NDVkYSIsIm5iZiI6MTYzMjU5MTUwMS40ODUsInN1YiI6IjYxNGY1ZThkYTliOWE0MDA0MzU2M2ExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wNYh2BY2ySxaUtDxcux1j6tbXVBf8mF6SkrsFU6Sw7A';
  }
  return config;
});

export const getGenreMovies = async () => {
  return await api
    .get(baseUrl('genre/movie/list?language=pt-br'))
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      throw error;
    });
};