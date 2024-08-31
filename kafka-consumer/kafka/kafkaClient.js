const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [`${process.env.BROKER_KAFKA_HOST}:9092`] 
});

module.exports = kafka;