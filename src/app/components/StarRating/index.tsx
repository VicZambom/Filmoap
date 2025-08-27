import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

export interface Props {
  rating: number;
}

// Componente funcional que exibe a classificação em estrelas
export default function StarRating(props: Props) {
  const numStars = Math.round(props.rating / 2);

  const fullStars = []
  const emptyStars = []

  // Preenche arrays para estrelas cheias e vazias com base na classificação fornecida
  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  // Renderiza as estrelas preenchidas e vazias com base na classificação
  return (
    <div className="flex gap-1">
      {fullStars.map(index => (
        <FaStar key={index} className="text-brand-brown" />
      ))}
      {emptyStars.map(index => (
        <FaRegStar key={index} className="text-brand-brown" />
      ))}
    </div>
  )
}
