// Import packages
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { createStream } from 'rotating-file-stream'
import { createWriteStream } from 'fs'
