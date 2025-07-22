import {getClient, PollingMode} from "configcat-node";
import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';

const localEnvPath = path.resolve(__dirname, "../.env");
const rootEnvPath = path.resolve(__dirname, "../../.env");

if (fs.existsSync(localEnvPath)) {
  dotenv.config({ path: localEnvPath });
} else if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
} else {
  dotenv.config();
}

const sdkKey = process.env.CONFIGCAT_SDK_KEY;
const cacheTimeToLiveSeconds = +(process.env.CONFIGCAT_LAZYLOAD_TTL || "");

if (!sdkKey) {
  throw new Error("CONFIGCAT_SDK_KEY is not defined in .env");
}

export const configCatClient = getClient(sdkKey, PollingMode.LazyLoad, {
  cacheTimeToLiveSeconds
});