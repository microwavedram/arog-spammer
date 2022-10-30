import { Command } from "src/util/Command"
import { SlashCommandBuilder, Embed } from "@discordjs/builders"

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const cmd: Command = {
    name: "ping",
    description: "ping-pong",
    command: () => {
        return new SlashCommandBuilder()
        .setName(cmd.name)
        .setDescription(cmd.description)
        .addUserOption(builder => {
            return builder.setDescription("rec")
            .setName("hi")
            .setRequired(true)
        })
    },
    execute: async (interaction) => {
        interaction.reply("Ping, pong, fuck arog")
        const arog = interaction.options.getUser("hi")
        while (true) {
            arog?.send("test")
            await sleep(8000)
        }
    }
}

        