import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as practicebot from './commands/practicebot.js'

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
    console.log(client.user.tag);
}

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    switch (interaction.commandName) {
        case 'practicebot':
            await practicebot.execute(interaction);
            break;
    }
}

client.once(Events.ClientReady, readyDiscord);

client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handleInteraction);