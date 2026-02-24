import './Sections.css';

export function Sections() {
  return (
    <section className="sections">
      <h2>Seções da Biblioteca</h2>
      <span className="title-line"></span>

      <p className="sections-description">
        Explore as diversas produções autorais dos nossos estudantes
      </p>

      <div className="grid">
        <div className="card">
          <div className="icon red">🏅</div>
          <h3>Redações Nota 10</h3>
          <span>245 itens</span>
        </div>
        <div className="card">
          <div className="icon orange">📖</div>
          <h3>Cordéis</h3>
          <span>189 itens</span>
        </div>
        <div className="card">
          <div className="icon blue">📄</div>
          <h3>Contos</h3>
          <span>342 itens</span>
        </div>
        <div className="card">
          <div className="icon purple">✍️</div>
          <h3>Crônicas</h3>
          <span>276 itens</span>
        </div>
        <div className="card">
          <div className="icon green">📘</div>
          <h3>Clube de Leitura</h3>
          <span>156 itens</span>
        </div>
        <div className="card">
          <div className="icon light-purple">📰</div>
          <h3>Jornal da Escola</h3>
          <span>98 itens</span>
        </div>
        <div className="card">
          <div className="icon teal">🖼️</div>
          <h3>Infográficos</h3>
          <span>127 itens</span>
        </div>
        <div className="card">
          <div className="icon pink">🎨</div>
          <h3>Galeria de Artes</h3>
          <span>213 itens</span>
        </div>
        <div className="card">
          <div className="icon dark-orange">🎥</div>
          <h3>Vídeos Autorais</h3>
          <span>87 itens</span>
        </div>
        <div className="card">
          <div className="icon dark-blue">🌐</div>
          <h3>Literatura em Libras</h3>
          <span>45 itens</span>
        </div>
      </div>
    </section>
  );
}