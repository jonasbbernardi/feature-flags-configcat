import { Request, Response } from "express";
import { configCatClient } from "../configcatClient";
import { User } from "configcat-node";

async function logs(req: Request, res: Response) {
  const enableLogs = await configCatClient.getValueAsync("enableDetailedAuditLogs", false);

  const timestamp = Date.now();
  const ip = "127.0.0.1";
  const symptoms = ["Fever", "Cough"];
  const logs = [ {timestamp, ip, symptoms} ];

  if (enableLogs) {
    return res.json({ logs });
  }
  return res.json({ logs: ["Total triage sessions: 18"] });
}

async function user(req: Request, res: Response) {
  const user_id = req.params['user_id'];
  const group_id = [4,5,6].includes(+user_id) ? 'group_1' : 'group_2'
  const user = new User(user_id, undefined, undefined, {
    group_id
  });

  const userHealthPlan = await configCatClient.getValueAsync("userHealthPlan", false, user);

  if(!!userHealthPlan) {
    return res.json({plan_id: 5});
  }
  return res.json({error: 1, message: 'No plans found.'})
}

export default {
  logs,
  user
}