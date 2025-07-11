import { Request, Response } from "express";
import { configCatClient } from "../configcatClient";

async function triage(req: Request, res: Response) {
  const useAI = await configCatClient.getValueAsync("useAiModuleForTriage", false);

  const { symptoms } = req.body;

  if (!Array.isArray(symptoms)) {
    return res.status(400).json({ message: "Invalid symptoms." });
  }

  if (useAI) {
    let severity = "mild";
    if (symptoms.length >= 2) severity = "moderate";
    if (symptoms.length >= 4) severity = "severe";

    return res.json({ message: `Classification: ${severity}` });
  }
  return res.json({ message: "Symptoms received. Please consult a doctor if necessary." });
}

export default {triage};