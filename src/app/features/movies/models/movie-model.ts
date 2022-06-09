import { SpokenLanguages } from './spoken-languages';

export type MovieModel = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: [],
  id: number,
  original_language: string,
  status: string,
  spoken_languages: SpokenLanguages[],
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  budget: number,
  vote_average: number,
  vote_count: number,
  revenue: number,
};
