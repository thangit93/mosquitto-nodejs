var mqtt = require('mqtt')

var options = {
    port: 1883,
    host: 'mqtt://mosquitto',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};

var client = mqtt.connect('mqtt://mosquitto', options)

client.on('connect', function () {
    client.subscribe('thangtd/mqtt', function (err) {
        if (!err) {
            console.log('subscribe topic thangtd/mqtt success')
        } else {
            console.log('subscribe topic thangtd/mqtt failed')
        }        
    })
    console.log('connect success')
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString(), topic)
    // client.end()
})