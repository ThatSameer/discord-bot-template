
# discord-bot-template

A ready made template for using a Discord bot with advanced commands/events handlers already created.

## Description

This template was made using [CodeLyon's](https://www.youtube.com/c/CodeLyon) method of advanced commands/events handlers.

## Getting Started

### Dependencies

* [Node.js (Current)](https://nodejs.org)
* [A Discord Bot](https://discord.com/developers/applications)
* [Discord.js node module](https://github.com/discordjs/discord.js)

### Installing

1. Install the 'Current' Node.js from https://nodejs.org
2. Clone/fork this repo using your preferred method e.g.
```bash
git clone https://github.com/ThatSameer/discord-bot-template.git
```
**NEW:** You can now click the big green 'Use this template' button at the top of this repo!

3. Install the Discord node module by running this within the projects folder
```bash
npm install discord.js
```
**Note:** Remember to switch on both Privileged Gateway Intents for your Discord bot in your Discord Developer Portal

### Using this template

* In the [index.js](https://github.com/ThatSameer/discord-bot-template/blob/main/index.js) file, assign your Discord bot token to 'token' using your preferred method. It is generally **not** recommended to store your token in plain text. Treat your token like your password!
```js
client.login(token)
```
* The main area of interest will be the [commands](https://github.com/ThatSameer/discord-bot-template/tree/main/commands) and [events](https://github.com/ThatSameer/discord-bot-template/tree/main/events) folders. Some examples are already included

## Help

* Recommended reading
   * [Command handling](https://discordjs.guide/creating-your-bot/command-handling.html#command-handling)
   * [Event handling](https://discordjs.guide/creating-your-bot/event-handling.html#event-handling)
* Recommended videos
   * [CodeLyon](https://youtube.com/playlist?list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4)

## Authors

tbc

## Version History

tbc

## License

tbc

## Acknowledgments

tbc
