import { Router } from 'express';

const router = Router();

import { App } from '../../controllers/appController.ctrl';

// Respond to /
router.get('/', App);

// Make code global
module.exports = router;
