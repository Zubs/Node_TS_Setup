import chalk from "chalk"

/**
 * Displays bold colorful message on the console
 * @param text Text to be logged
 * @param color Yellow, Red, or Green
 * @returns true
 */
 export function Logger(text: string, color: string = 'yellow') {
	const obj = {
		yellow: chalk.yellow.bold,
		red: chalk.red.bold,
		green: chalk.green.bold,
	};

	console.log(Object(obj)[color](text));
	
	return true;
}
