const db = require('./database'); // pour SQLite

// Ajouter un joueur
app.post('/joueurs', (req, res) => {
    const { nom, poste, numero, stats } = req.body;
    db.run(`INSERT INTO joueurs (nom, poste, numero, stats) VALUES (?, ?, ?, ?)`,
        [nom, poste, numero, stats],
        function(err) {
            if(err) return res.status(500).json(err);
            res.json({ id: this.lastID });
        });
});

// Récupérer tous les joueurs
app.get('/joueurs', (req, res) => {
    db.all(`SELECT * FROM joueurs`, [], (err, rows) => {
        if(err) return res.status(500).json(err);
        res.json(rows);
    });
});
