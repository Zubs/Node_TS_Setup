import express from 'express'
const app = express()
import { urlencoded } from 'body-parser'
import cors from 'cors'
const appRoute = require('../routes/api/appRoutes')
import path from 'path'
import { Logger } from './logger'
// import terminalLink from 'terminal-link'
import chalk from 'chalk'

/**
 * Set up routes and 404
 */
 export function setRoutes() {

	app.use(express.json());
	app.use(urlencoded({ extended: true }));
	app.use(cors())
	
	// Mount routes
	app.use('/', appRoute);

	// Handle 404
	app.use('*', (req: any, res: any) => {
		res.status(404).json({
			message: "404 | Not Found"
		});
	});
}

/**
 * Set static folder in compiled code
 */
 export function setStaticFolder() {
	// Set static files
	app.use(express.static(path.join(__dirname, '..', '..','dist', 'public')));
}

/**
 * Initiate application
 */
 export function startApp() {

	const PORT = process.env.PORT || 8000;
	
	// Set Greeting And Start App
	if (process.env.NODE_ENV === "production") {
		const greeting = "Application Started At PORT " + PORT + " in " + process.env.NODE_ENV + " Mode";

		// Start app
		app.listen(PORT, () => {
			Logger(greeting, 'green');
		});
	} else {
		const greeting = "Application Started At PORT " + PORT + "\nApplication can be found at " // + terminalLink(chalk.yellow.bold('http://localhost:' + PORT), 'http://localhost:' + PORT);

		// Start app
		app.listen(PORT, () => {
			Logger(greeting, 'green');
		});
	};
}
