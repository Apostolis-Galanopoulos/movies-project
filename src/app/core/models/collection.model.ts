import { MovieModel } from '@app/features/movies/models/movie-model';

export type Collection = {
  title: string;
  id: string;
  description: string;
  movies?: MovieModel[];
};
