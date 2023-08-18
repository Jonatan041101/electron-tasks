import React from 'react';
import Todos from '../src/components/Todos';

function Home() {
  return (
    <main className="main">
      <h1 className="main__h1">Aplicación de notas</h1>
      <Todos />
    </main>
  );
}

export default Home;
