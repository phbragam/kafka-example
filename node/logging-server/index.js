require('dotenv').config()

const runConsumer = require('./kafka/consumer.js');
runConsumer().catch(console.error);