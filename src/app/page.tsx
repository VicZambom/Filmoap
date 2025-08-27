'use client';

import MovieList from "./components/MovieList";
import Navbar from "./components/navbar"; 
import { useState } from "react";

// Componente funcional principal da aplicação
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Função para lidar com a busca de filmes
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} /> 
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}