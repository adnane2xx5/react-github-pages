import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/chat/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.answer);
    } catch (error) {
      setResponse("❌ Erreur de connexion avec le backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* HERO */}
      <header className="hero">
        <div className="overlay">
          <h1>❤️⚽ Wydad Athletic Club</h1>
          <p>Plus qu’un club, une légende du football marocain et africain</p>
          <Link to="/team" className="btn-hero">Voir l’équipe</Link>
        </div>
      </header>

      {/* HISTOIRE */}
      <section className="history">
        <h2>📖 Histoire du Wydad</h2>
        <p>
          Fondé en 1937 à Casablanca, le Wydad Athletic Club est l’un des clubs
          les plus emblématiques du Maroc et d’Afrique. Symbole de résistance,
          de passion et de succès.
        </p>
        <Link to="/palmares" className="btn-secondary">Voir le palmarès</Link>
      </section>

      {/* NAVIGATION */}
      <section className="cards">
        <div className="card">
          <h3>⚽ Équipe</h3>
          <p>Découvrez les joueurs actuels du WAC.</p>
          <Link to="/team" className="btn-card">Voir plus</Link>
        </div>
        <div className="card">
          <h3>🏆 Palmarès</h3>
          <p>Les titres et gloires du club.</p>
          <Link to="/palmares" className="btn-card">Voir plus</Link>
        </div>
        <div className="card">
          <h3>🔥 Fans</h3>
          <p>Les Winners, le 12e homme du Wydad.</p>
          <Link to="/fans" className="btn-card">Voir plus</Link>
        </div>
      </section>

      {/* 🤖 CHAT IA */}
      <section className="ai-section">
        <h2>🤖 Assistant IA du Wydad</h2>
        <p>Pose une question sur le club, les joueurs ou l’histoire.</p>

        <textarea
          rows="4"
          placeholder="Ex : Qui est Hakim Ziyech ?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button onClick={sendMessage} disabled={loading}>
          {loading ? "⏳ Envoi..." : "Envoyer"}
        </button>

        {response && (
          <div className="ai-response">
            <strong>Réponse IA :</strong>
            <p>{response}</p>
          </div>
        )}
      </section>

      {/* PRESIDENT */}
      <section className="president-home">
        <h2>👔 Président actuel</h2>
        <div className="president-card-home">
          <img
            src="https://medias24.com/content/uploads/2024/07/26/ait-menna.png"
            alt="Hicham Ait Menna"
          />
          <div>
            <h3>Hicham Ait Menna</h3>
            <p>Président du Wydad AC depuis 2023</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Wydad AC | Fait avec ❤️ par Mohammed Adnane</p>
      </footer>
    </div>
  );
};

export default Home;
