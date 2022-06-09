import { MovieModel } from './movie-model';

export type MovieResponseModel = {
  page: number,
  results: MovieModel[],
  total_pages: number,
  total_results: number,
};
