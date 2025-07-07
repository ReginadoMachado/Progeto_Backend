require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const fs = require('fs');
const yaml = require('js-yaml');
const swaggerDocument = yaml.load(fs.readFileSync('./src/swagger/swagger.yml', 'utf8'));
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
