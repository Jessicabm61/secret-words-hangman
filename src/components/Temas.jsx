// Temas.js

import React from 'react';
import './Temas.css'; // Importando o arquivo CSS
import { useNavigate } from 'react-router-dom';

const Temas = () => {
  const navigate = useNavigate();

  const handlePalavra = (category) => {
    navigate('/', { state: { category } });
  }

  return (
    <div className="temas-container">
      <h1 className="temas-title">Temas</h1>
      <div className="temas-palavras">
        <div className="temas-palavra" onClick={() => handlePalavra("Animais")}>Animais</div>
        <div className="temas-palavra" onClick={() => handlePalavra("Frutas")}>Frutas</div>
        <div className="temas-palavra" onClick={() => handlePalavra("Profissoes")}>Profissões</div>
        <div className="temas-palavra" onClick={() => handlePalavra("Esportes")}>Esportes</div>
      </div>
      <button className="btn-jogar-voltar" onClick={() => navigate("/")}>Voltar</button>
    </div>
  )
}

export default Temas;
