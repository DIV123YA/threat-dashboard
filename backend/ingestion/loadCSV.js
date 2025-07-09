// ingestion/loadCSV.js
const fs = require('fs');
const csv = require('csv-parser');
const sequelize = require('../config/db.js');
const Threat = require('../models/Threat.js');

sequelize.sync().then(() => {
  const results = [];

  fs.createReadStream('ingestion/Cybersecurity_Dataset.csv')
    .pipe(csv())
    .on('data', (data) => {
      results.push({
        description: data["Cleaned Threat Description"],
        category: data["Threat Category"],
        severity: parseInt(data["Severity Score"]) || 0
      });
    })
    .on('end', async () => {
      await Threat.bulkCreate(results);
      console.log("Data Imported");
      process.exit();
    });
});
