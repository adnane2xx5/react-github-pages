import { useState } from "react";

const ChatIA = () => {
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      setResponse("❌ Erreur de connexion avec le backend");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>💬 Chat IA</h2>

      <textarea
        rows="4"
        placeholder="Écris ton message..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        {loading ? "⏳ Envoi..." : "Envoyer"}
      </button>

      {response && (
        <div style={{ marginTop: "20px", background: "#f4f4f4", padding: "15px" }}>
          <strong>Réponse IA :</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatIA;
