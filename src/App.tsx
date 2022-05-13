import React from 'react';
import './App.css';

function App() {
  return (
    <section>
      <header className='header-pag'>
        <h1 title="Logo Finance">Stone Co. Finance</h1>
        <nav>
          <h2>Menu</h2>
          <ul>
            <li title="Home link"><a href="https://www.google.com" target="_blank" rel="noreferrer">Home</a></li>
            <li title="A empresa link" ><a href='https://www.google.com' target="_blank" rel="noreferrer">A empresa</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {Array.from({ length: 8 }).map((_, index) => (
          <article key={index}>
            <header className='header-article'>
              <h2>Card {index}</h2>
              <p>Algum conteúdo a falar</p>
              <time dateTime='2022-11-03' >03/11/2022</time>
            </header>
            <section>
              <h4>Conteúdo do body do card 1</h4>
              <p>Cheio de conteúdo</p>
            </section>
            <footer>
              <address>
                <a href='mailto:testando@test.com'>testando@teste.com</a>
              </address>
            </footer>
          </article>
        ))}
      </main>
      <footer className='footer-pag'>
        <h3>Todos os direitos reservados a Stone Co</h3>
        <address>
          <a href='mailto:testando@test.com'>testando@teste.com</a>
        </address>
      </footer>
    </section>
  );
}

export default App;
