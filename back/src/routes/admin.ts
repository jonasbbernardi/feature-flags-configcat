import express from "express";
import handler from '../controllers/admin';

const router = express.Router();

router.get("/logs", handler.logs);

router.get('/user/:user_id', handler.user);

export default router;
