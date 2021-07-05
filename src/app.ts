import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { createStream } from 'rotating-file-stream'
import { createWriteStream } from 'fs'
import { Logger } from './utils/logger'
import { runApp } from './utils/runApp'

const app = express()

// Set Up Daily Logging
const accessDailyLogStream = createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})

// Single Logging For Development
var accessDevLogStream = createWriteStream(path.join(__dirname, 'log', 'dev', 'access.log'), { flags: 'a' })

// Using morgan to log
Logger("Starting Logger...")
if (process.env.NODE_ENV === 'production') {
	app.use(morgan('combined', { stream: accessDailyLogStream }))

	Logger("Now Writing Logs To log/access.log", 'green')
} else {
	app.use(morgan('dev', { stream: accessDevLogStream }))

	Logger("Now Writing Logs To log/dev/access.log", 'green')
}
