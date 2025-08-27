import { Movie, MovieDetail } from '@/types/movie';
import MovieDetailClient from './MovieDetailClient';

async function getMovie(id: string): Promise<MovieDetail> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`);
  return response.json();
}

export async function generateStaticParams() {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
  const data = await response.json();

  return data.results.map((movie: Movie) => ({
    id: movie.id.toString(),
  }));
}

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  
  return <MovieDetailClient movie={movie} />;
}