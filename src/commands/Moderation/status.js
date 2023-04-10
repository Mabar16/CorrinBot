const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = { 
    data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Sets Corrin's status")
    .addStringOption(option => option.setName("status").setDescription("Corrin's status").setMaxLength(128).setRequired(true))
    .addStringOption(option => option.setName('type').setDescription('The type of status you want to set').addChoices(
        {name: "Playing", value: `${1}`},
        {name: "Streaming", value: `${2}`},
        {name: "Listening", value: `${3}`},
        {name: "Watching", value: `${4}`},
        {name: "Competing", value: `${6}`}).setRequired(true)),

    async execute(interaction, client){
        
        const { options } = interaction;
        const status = options.getString('status');
        const type = options.getString('type');

        if (interaction.user.id != "113637625574850561"){
            return await interaction.reply({content: "You do not have permission to use this command", ephemeral: true});
        }
        else {
            client.user.setActivity({
                name: status,
                type: type-1,
                url: "https://www.twitch.tv/SirStevenStone"
            })

            const embed = new EmbedBuilder()
            .setColor(0x9900FF)
            .setDescription(`:white_check_mark: Corrin's status has been set to ${status}, with type ${type-1}!`)

            await interaction.reply({embeds: [embed], ephemeral: true});
        }
    }
}