'use client';

import { useEffect, useState } from 'react';
import { MovieDetail } from '@/types/movie';
import axios from 'axios';
import { FaCalendar, FaClock, FaStar } from 'react-icons/fa';

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${params.id}`,
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: 'pt-BR',
        }
      }).then(response => {
        setMovie(response.data);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [params.id]);

  if (loading) {
    return <div className="text-center p-10 text-brand-brown">A carregar...</div>;
  }

  if (!movie) {
    return <div className="text-center p-10 text-brand-brown">Filme não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Imagem de Fundo (Backdrop) - Agora apenas decorativa, sem texto por cima */}
      <div
        className="relative w-full h-[60vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
      >
        {/* Overlay escuro para suavizar a imagem de fundo */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="container mx-auto px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna do Poster (Esquerda) */}
          <div className="md:col-span-1 flex justify-center"> {/* Centraliza o poster em telemóveis */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-2xl w-2/3 md:w-full max-w-xs md:max-w-none transform -translate-y-1/4" // Ajusta a posição vertical
            />
          </div>

          {/* Coluna de Informações (Direita) - Agora inclui o título */}
          <div className="md:col-span-2 text-center md:text-left text-brand-brown mt-4 md:mt-0 bg-white p-6 rounded-lg shadow-xl"> {/* Fundo branco para o bloco de info */}
            <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">{movie.title}</h1> {/* Título em cor escura */}
            
            <div className="flex items-center justify-center md:justify-start flex-wrap gap-x-6 gap-y-2 text-brand-brown">
              <span className="flex items-center gap-2"><FaCalendar /> {new Date(movie.release_date).getFullYear()}</span>
              <span className="flex items-center gap-2"><FaClock /> {movie.runtime} min</span>
              <span className="flex items-center gap-2"><FaStar className="text-yellow-400" /> {movie.vote_average.toFixed(1)} / 10</span>
            </div>

            <div className="mt-4">
              {movie.genres.map(genre => (
                <span key={genre.id} className="inline-block bg-brand-brown/10 text-brand-brown rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2">
                  {genre.name}
                </span>
              ))}
              <div className="mt-8 bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-brand-brown">Sinopse</h2>
                <p className="text-brand-brown/90 leading-relaxed text-base">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}