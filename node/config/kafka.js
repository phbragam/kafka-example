const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['172.19.65.232:9092'] // Substitua pelo endereço do seu broker Kafka
});

const producer = kafka.producer();

const runProducer = async () => {
    await producer.connect();
};

runProducer().catch(console.error);

module.exports = producer;

