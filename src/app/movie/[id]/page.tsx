'use client';

import { useEffect, useState } from 'react';
import { Movie, MovieDetail } from '@/types/movie';
import axios from 'axios';
import { FaCalendar, FaClock, FaStar, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export async function generateStaticParams() {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
  const data = await response.json();

  return data.results.map((movie: Movie) => ({
    id: movie.id.toString(),
  }));
}

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ... (a sua lógica de fetch continua a mesma)
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
    return <div className="flex items-center justify-center h-screen bg-slate-100 text-brand-brown">A carregar...</div>;
  }

  if (!movie) {
    return <div className="flex items-center justify-center h-screen bg-slate-100 text-brand-brown">Filme não encontrado.</div>;
  }

  return (
    // Contentor principal 
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center p-4">

      <Link href="/" className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-black/50 text-brand-gray py-2 px-4 rounded-full transition-transform hover:scale-105">
        <FaArrowLeft />
        <span>Voltar</span>
      </Link>

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-100 brightness-55"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
      />
      
      {/* Card de conteúdo central */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 max-w-6xl w-full h-[85vh] max-h-[600px] bg-brand-gray/50 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        
        {/* Coluna do Poster (Esquerda) */}
        <div className="col-span-1 hidden md:block bg-white p-2 shadow-lg rounded-xl m-3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Coluna de Informações (Direita) */}
        <div className="col-span-1 md:col-span-2 p-6 md:p-8 flex flex-col text-brand-brown overflow-y-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{movie.title}</h1>
          
          {/* Metadados */}
          <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-brand-brown mb-4">
            <span className="flex items-center gap-2"><FaCalendar /> {new Date(movie.release_date).getFullYear()}</span>
            <span className="flex items-center gap-2"><FaClock /> {movie.runtime} min</span>
            <span className="flex items-center gap-2"><FaStar className="text-yellow-400" /> {movie.vote_average.toFixed(1)} / 10</span>
          </div>

          {/* Géneros */}
          <div className="mb-6">
            {movie.genres.map(genre => (
              <span key={genre.id} className="inline-block bg-white/10 text-brand-brown rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                {genre.name}
              </span>
            ))}
          </div>

          {/* Sinopse com rolagem interna */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Sinopse</h2>
            <p className="text-brand-brown leading-relaxed">{movie.overview}</p>
          </div>
        </div>

      </div>
    </div>
  );
}