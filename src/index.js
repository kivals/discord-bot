// const { Client, Intents } = require('discord.js');
import { Client } from 'discord.js';

const client = new Client({
    intents: [
        'Guilds',
        'GuildMessages'
    ],
});

client.login("TOKEN");

