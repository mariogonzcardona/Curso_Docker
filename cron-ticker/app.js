var cron = require('node-cron');
const syncDB = require('./tasks/sync-db');
console.log('Cron job started v3');
cron.schedule('1-59/1 * * * * *', syncDB);
