const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = {
  async create(req, res) {
    const { name, email, password, whatsapp, city, uf } = req.body;
    const id = uuidv4();
    const password_hash = await bcrypt.hash(password, 8);

    await connection('ongs').insert({ id, name, email, password_hash, whatsapp, city, uf });
    return res.json({ id });
  },

  async index(req, res) {
    const ongs = await connection('ongs').select('*');
    res.json(ongs);
  }
};