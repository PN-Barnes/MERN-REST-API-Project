const db = require('../config/connection');

const { MenuItem } = require('../models');

const menuData = require('./menuItemSeeds.json');

db.once('open', async () => {
  try {
    await MenuItem.deleteMany();
    await MenuItem.insertMany(menuData);

    console.log('\n =================== DATABASE SEEDED! ===================');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
