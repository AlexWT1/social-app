import express from 'express';

import { getUser, getUsersFriends, addRemoveFriend } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUsersFriends);

/* UPDATE */
router.patch('/:id/:frindId', verifyToken, addRemoveFriend);

export default router;
