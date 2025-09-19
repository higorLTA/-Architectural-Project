require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dataSource = require("./config/DataBase");

const app = express();

app.use(cors());
app.use(express.json());

// Rota de teste para verificar o status do backend
app.get("/status", (req, res) => {
  res.status(200).json({ message: "Backend está online e funcionando!" });
});

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    let connected = false;

    while (!connected) {
        try {
            await dataSource.authenticate();
            console.log("🟢 Conexão com o banco de dados estabelecida com sucesso!");

            await dataSource.sync({ alter: true }) 
            console.log("🟢 Tabelas sincronizadas com sucesso!");
            
            connected = true;
        } catch (err) {
            console.log("⏳ Banco ainda não está pronto, tentando novamente em 3s...", err.message);
            await wait(3000);
        }
    }

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, "0.0.0.0", (err) => {
        if (err) {
            console.error(`❌ Erro ao iniciar o servidor na porta ${PORT}:`, err);
            return;
        }
        console.log(`Servidor rodando na porta ${PORT} 🚀`);
    });
})();
