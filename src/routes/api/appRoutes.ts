import { Router } from 'express';

const router = Router();

import { App } from '../../controllers/appController.ctrl';

// Respond to /
router.get('/', App);

module.exports = router;
