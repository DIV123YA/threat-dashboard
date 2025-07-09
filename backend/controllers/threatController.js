const sequelize = require('../config/db.js');
const Threat = require('../models/Threat.js');
const { Op } = require('sequelize');

exports.getAllThreats = async (req, res) => {
  const { page = 1, limit = 10, category, search } = req.query;
  const where = {};

  if (category) where.category = category;
  if (search) where.description = { [Op.like]: `%${search}%` };

  try {
    const threats = await Threat.findAll({
      where,
      offset: (page - 1) * limit,
      limit: parseInt(limit)
    });
    res.json(threats);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getThreatById = async (req, res) => {
  try {
    const threat = await Threat.findByPk(req.params.id);
    if (!threat) return res.status(404).json({ message: 'Not Found' });
    res.json(threat);
  } catch {
    res.status(404).json({ message: 'Not Found' });
  }
};

exports.getStats = async (req, res) => {
  try {
    console.log("inside function")
    const total = await Threat.count();

    console.log("total:", total)

    const categoryCounts = await Threat.findAll({
      attributes: ['category', [sequelize.fn('COUNT', sequelize.col('category')), 'count']],
      group: ['category']
    });

    const severityCounts = await Threat.findAll({
      attributes: ['severity', [sequelize.fn('COUNT', sequelize.col('severity')), 'count']],
      group: ['severity']
    });

    res.json({ total, categoryCounts, severityCounts });
  } catch (err) {
    console.error("Stats error:", err);
    res.status(500).json({ message: 'Error fetching stats' });
  }
};