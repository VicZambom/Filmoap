import { Movie } from "@/types/movie";
import StarRating from "../StarRating";
import Link from "next/link";

// Definimos as propriedades que o componente vai receber
export interface Props {
  movie: Movie;
}

// Componente funcional que exibe as informações do filme
export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    // Link para a página de detalhes do filme usando o ID do filme
    <Link href={`/movie/${movie.id}`}>
      <li className='bg-white rounded-3xl border border-brand-brown shadow-lg transition-shadow duration-300 hover:shadow-brand-brown p-3 h-full flex flex-col'>

        {/* Imagem do Poster do Filme */}
        <div className="w-full h-auto overflow-hidden rounded-md">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Informações do Filme */}
        <div className="pt-3 text-brand-brown flex flex-col flex-grow">
          <p className="text-base font-bold mb-2 truncate">
            {movie.title}
          </p>

          {movie.vote_average > 0 &&
            <StarRating rating={movie.vote_average} />
          }
          
          {movie.overview &&
            <p className='text-sm text-brand-brown mt-2 flex-grow'>
              {movie.overview.length > 90
                ? `${movie.overview.substring(0, 90)}...`
                : movie.overview}
            </p>
          }
        </div>
      </li>
    </Link>
  )
}