const { SlashCommandBuilder } = require('@discordjs/builders');

const age = 4.5;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("welcome")
    .setDescription("Welcomes the user"),
    async execute(interaction, client) {
        await interaction.reply({content: `Welcome home, ${interaction.user.username}. (◕ᴗ◕✿)` });
    }
}