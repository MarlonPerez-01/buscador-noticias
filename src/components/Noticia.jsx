import React from 'react';

export const Noticia = ({ noticia }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={noticia.urlToImage} className="card-img-top" alt={noticia.title} />
        <div className="card-body">
          <h5 className="card-title">{noticia.title}</h5>
          <p className="card-text">{noticia.content}</p>
        </div>
        <div className="card-footer bg-white p-0">
          <a className="btn btn-primary w-100" href={noticia.url} target="black">
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};
