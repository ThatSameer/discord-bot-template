module.exports = {
    name: 'ping',
    description: "simple ping command",
    execute(client, message, args) {
        message.channel.send('pong');
    }
}