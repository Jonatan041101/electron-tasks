import React from 'react';
import CreateTodo from '../src/molecules/CreateTodo';

function Home() {
  return (
    <main className="main">
      <h1 className="main__h1">Aplicación de notas</h1>
      <CreateTodo />
    </main>
  );
}

export default Home;
