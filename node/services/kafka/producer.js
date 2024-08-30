const Kafka = require('./kafkaClient');

const producer = Kafka.producer();

const runProducer = async () => {
    await producer.connect();
};

runProducer().catch(console.error);

module.exports =  producer;