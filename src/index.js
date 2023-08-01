// const { Client, Intents } = require('discord.js');
import { Client } from 'discord.js';

const client = new Client({
    intents: [
        'Guilds',
        'GuildMessages'
    ],
});

client.login("MTEzNTE0NTkzMjk1OTI2ODk0OQ.G3GB5a.dQnVc5JgSsPKW0VIDVI-SMdXlaaCMQrtS_uT_A");

