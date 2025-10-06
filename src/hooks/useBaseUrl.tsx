import { API_URL } from "./useMoviesData";

export const baseUrl = (endpoint?: string) => {
  const url = `${API_URL}${endpoint ? endpoint : ""}`;

  return url;
};