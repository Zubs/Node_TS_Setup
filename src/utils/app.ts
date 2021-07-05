import express from 'express'
const app = express()
import { urlencoded } from 'body-parser'
import cors from 'cors'
const appRoute = require('../routes/api/appRoutes')

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
