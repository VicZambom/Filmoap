'use client';

import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

// Definimos as propriedades que o componente Navbar vai receber
interface NavbarProps {
  onSearch: (query: string) => void;
}

// Componente funcional Navbar com funcionalidade de busca
export default function Navbar({ onSearch }: NavbarProps) {
  const [query, setQuery] = useState('');

  const handleSearchClick = () => {
    onSearch(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    // Barra de navegação com título e campo de busca
    <nav className="bg-brand-brown px-[3%] py-6 drop-shadow-md flex items-center justify-between">
      <h1 className="text-brand-2gray text-3xl font-semibold">Filmes</h1>
      {/* Campo de busca com ícone de lupa */}
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Procurar filmes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-brand-gray/50 border border-brand-brown rounded-xl py-2 pl-5 pr-11 text-brand-brown placeholder:text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-brown"
        />
        <button 
          onClick={handleSearchClick}
          className="absolute right-3 text-brand-brown hover:text-brand-brown/70"
        >
          <FaSearch />
        </button>
      </div>
    </nav>
  )
}