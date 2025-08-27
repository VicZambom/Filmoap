export interface Movie {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  vote_average: number,
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
  release_date: string;
  runtime: number;
  backdrop_path: string;
}