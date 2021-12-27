import React, { useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { Noticias } from './components/Noticias';

function App() {
  const [noticias, setNoticias] = useState([]);

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <Header titulo="Buscador de noticias" />
      </div>
      <div className="container">
        <div className="row">
          <Formulario setNoticias={setNoticias} />
        </div>

        {noticias.length > 0 && (
          <div className="row mb-4">
            <Noticias noticias={noticias} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
