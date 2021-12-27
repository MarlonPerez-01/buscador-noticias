import React, { useEffect } from 'react';
import { useSelect } from '../hooks/useSelect';

export const Formulario = ({ setNoticias }) => {
  const [categoria, , Select] = useSelect();

  const fetchNoticias = async () => {
    if (categoria.trim() === '') throw new Error('Se requiere una categoria');

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=df16940dc7a04aa5bb7174216ed9dbaa`
    );

    const datos = await response.json();
    setNoticias(datos.articles);
  };

  const obtenerNoticias = (e) => {
    e.preventDefault();
    fetchNoticias();
  };

  //Obtener noticias generales al cargar por primera vez
  useEffect(() => {
    fetchNoticias();
    // eslint-disable-next-line
  }, []);

  return (
    <form onSubmit={obtenerNoticias}>
      <div className="mb-3">
        <Select />
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Buscar
      </button>
    </form>
  );
};
