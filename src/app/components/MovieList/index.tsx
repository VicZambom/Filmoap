'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movie';

interface MovieListProps {
  searchQuery: string;
}

export default function MovieList({ searchQuery }: MovieListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  // useEffect para buscar filmes quando o componente monta ou quando a consulta de pesquisa muda
  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery);
    } else {
      getPopularMovies();
    }
  }, [searchQuery]);

  // Função para buscar filmes populares
  const getPopularMovies = () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/discover/movie', 
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
      }
    }).then (response => {
      setMovies(response.data.results);
    })
  }

  // Função para buscar filmes com base na consulta de pesquisa
  const searchMovies = (query: string) => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie', 
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR',
        query: query, 
      }
    }).then (response => {
      setMovies(response.data.results);
    })
  }

  return ( 
    // Lista de filmes exibida em uma grade responsiva
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {movies.map((movie) => 
        <MovieCard 
          key={movie.id}
          movie={movie}
        />
      )}
    </ul>
  );
}