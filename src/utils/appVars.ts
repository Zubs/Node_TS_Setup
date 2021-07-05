/**
 * Get data from package.json file
 * @param key The value name as it is in the package.json file
 */
 export function getPackagedVars (key: string = '') {

	// Import package.json
	const env_file = require('../../package.json');
	return Object(env_file);
}
