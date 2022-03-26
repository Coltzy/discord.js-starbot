import { BaseCommandInteraction } from 'discord.js';
import Command from '../Command';

export default class PingCommand extends Command {
	public constructor() {
		super('ping')
	}

	execute(interaction: BaseCommandInteraction<'raw'>): void {
		interaction.reply(`🏓Latency is ${Date.now() - interaction.createdTimestamp}ms.`);
	}
}