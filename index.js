// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const TOKEN = process.env.TOKEN;
// eslint-disable-next-line no-unused-vars
const APPLICATION_ID = process.env.APPLICATION_ID;
// eslint-disable-next-line no-unused-vars
const PUBLIC_KEY = process.env.PUBLIC_KEY;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
// console.log(token);
client.login(TOKEN);