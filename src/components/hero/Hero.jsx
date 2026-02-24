import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <h1>BIBLIOTECA VIVA</h1>
      <p className="subtitle">A biblioteca tá on!</p>

      <p className="location">
        EREM Abílio Monteiro, Lagoa do Ouro - PE
      </p>

      <p className="description">
        Leitura, Escrita e Protagonismo Digital. Um espaço onde os estudantes
        compartilham suas produções autorais e inspiram outros a criar.
        Juntos construímos conhecimento.
      </p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar redações, contos, vídeos..."
        />
        <button className="search-btn">BUSCAR</button>
      </div>

      <div className="actions">
        <button className="secondary-btn">Explorar Acervo</button>
      </div>
    </section>
  );
}