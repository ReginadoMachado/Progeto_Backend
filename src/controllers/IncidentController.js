const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async index(req, res) {
    const incidents = await connection('incidents').select('*');
    res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value, category } = req.body;
    const ong_id = req.ongId;
    const id = uuidv4();

    await connection('incidents').insert({ id, title, description, value, category, ong_id });
    res.status(201).json({ id });
  },

  async update(req, res) {
    const { id } = req.params;
    const { title, description, value, category } = req.body;
    const ong_id = req.ongId;

    const incident = await connection('incidents').where({ id }).first();
    if (!incident || incident.ong_id !== ong_id) return res.status(403).json({ error: 'Unauthorized' });

    await connection('incidents').where({ id }).update({ title, description, value, category });
    res.json({ message: 'Incident updated' });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.ongId;

    const incident = await connection('incidents').where({ id }).first();
    if (!incident || incident.ong_id !== ong_id) return res.status(403).json({ error: 'Unauthorized' });

    await connection('incidents').where({ id }).delete();
    res.status(204).send();
  }
};