const kafka = require('./kafkaClient');
const producer = require('./producer.js');

const consumer = kafka.consumer({ groupId: 'my-group' });

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'topic-1', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const msgString = message.value.toString();
            console.log(`Received message: ${msgString}`);
             // escrevendo topico no kafka
             // add try catch
             await producer.send({
                 topic: 'topic-2',
                 messages: [{ value: msgString }],
             });
        },
    });
};

module.exports =  runConsumer;