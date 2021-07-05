import { readFileSync } from 'fs'
import path from 'path'
import dotenv from 'dotenv'

/**
 * Get data from package.json file
 * @param key The value name as it is in the package.json file
 */
 export function getPackagedVars (key: string = '') {

	// Import package.json
	const env_file = require('../../package.json');
	return Object(env_file);
}

/**
 * Get data from .env file
 * @param key The .env value to be fetched
 */
 export function getEnvs (key: string = '') {

	// Import env data
	const env_file = process.env.NODE_ENV === 'production' ? readFileSync(path.join(__dirname, '..', '..', '.env')) : readFileSync(path.join(__dirname, '..', '..', '.env.dev'));

	const env_vars = dotenv.parse(env_file);

	// Return requested key
	if (key) {
		Object.keys(Object(env_vars)).forEach((element, i) => {
			if (key === element) {
				return Object.values(Object(env_vars))[i]
			}
		});
	} else {
		return Object(env_vars);
	};
}
