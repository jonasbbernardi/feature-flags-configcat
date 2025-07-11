import express from "express";
import handler from '../controllers/triage';

const router = express.Router();

router.post("/triage", handler.triage);

export default router;