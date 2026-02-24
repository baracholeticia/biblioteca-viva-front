import './Header.css';

export function Header() {
  return (
    <header>
      <nav className="topbar">
        <div className="logo">
          📚 <span>BIBLIOTECA VIVA</span>
        </div>
        <div className="icons">🔍 👤 ☰</div>
      </nav>
      <div className="red-line"></div>
    </header>
  );
}