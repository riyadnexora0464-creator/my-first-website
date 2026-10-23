
import './App.css'

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <h2>Gold Trade</h2>
        <a href="#explore">Explore</a>
      </nav>

      <header className="hero">
        <img
          src="https://www.ebc.com/upload/default/20230927/c3142c40937cffb27dc3efe88dd7b5cd.jpg"
          alt="Gold"
          className="hero-image"
        />

        <div className="hero-content">
          <h1>Welcome to XauUsd Trade</h1>
          <p>
            Learn the Behaviour of gold in different sessions
          </p>
          <a className="button" href="#explore">
            Learn Now
          </a>
        </div>
      </header>

      <section id="explore" className="explore">
        <h2>Explore the Trading World</h2>
        <p>
          Every great journey begins with a single step.
          Start discovering your favorite pair today.
        </p>
      </section>

      <footer>
        <p>© 2026 Gold Trade. Made with React.</p>
      </footer>
    </div>
  )
}

export default App
