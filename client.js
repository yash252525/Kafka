const { Kafka } = require('kafkajs');
exports.kafka = new Kafka({ 
        clientId: "my-app",
        brokers: ["172.31.44.84:9092"],

});

