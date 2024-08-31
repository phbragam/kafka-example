require('dotenv').config()
const kafka = require('./kafka/kafkaClient');
const producer = require('./kafka/producer.js');

const consumer = kafka.consumer({ groupId: 'my-group' });

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'tb01.post', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const msgString = message.value.toString();
            console.log(`Received message: ${msgString}`);
            // do some processing in the logs
            try {
                await producer.send({
                    topic: 'logs.summary',
                    messages: [{ value: msgString }],
                });
            } catch(err){
                console.log("error: ", err.message);
            }
        },
    });
};

runConsumer().catch(console.error);