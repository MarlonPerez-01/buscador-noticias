import React from 'react';
import { Noticia } from './Noticia';

export const Noticias = ({ noticias }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {noticias.map((noticia) => noticia.urlToImage && <Noticia key={noticia.url} noticia={noticia} />)}
    </div>
  );
};
