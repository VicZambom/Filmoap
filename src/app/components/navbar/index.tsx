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
    <nav className="bg-white px-[3%] py-3 shadow-md flex items-center justify-between">
      <h1 className="text-brand-brown text-2xl font-semibold">Filmes</h1>
      {/* Campo de busca com ícone de lupa */}
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Procurar filmes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border border-brand-brown rounded-full py-1 pl-4 pr-10 text-brand-brown placeholder:text-brand-brown/70 focus:outline-none focus:ring-2 focus:ring-brand-brown"
        />
        <button 
          onClick={handleSearchClick}
          className="absolute right-3 text-brand-brown hover:text-brand-brown"
        >
          <FaSearch />
        </button>
      </div>
    </nav>
  )
}