const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const ong = await connection('ongs').where({ email }).first();
    if (!ong) return res.status(400).json({ error: 'ONG not found' });

    const valid = await bcrypt.compare(password, ong.password_hash);
    if (!valid) return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: ong.id }, process.env.JWT_SECRET || 'supersecret', { expiresIn: '1d' });
    res.json({ token, ong: { id: ong.id, name: ong.name, email: ong.email } });
  }
};