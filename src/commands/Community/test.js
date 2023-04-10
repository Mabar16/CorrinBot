const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test commnand"),
    async execute(interaction, client) {
        await interaction.reply({content: 'Bot is working'});
    }
}