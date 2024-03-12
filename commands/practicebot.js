import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('practicebot')
    .setDescription('Replies practice bot');

export async function execute(interaction) {
    await interaction.reply('practice bot');
}
