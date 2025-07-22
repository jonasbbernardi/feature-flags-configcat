import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path, { dirname } from 'path';

const localEnvPath = path.resolve(__dirname, './.env');
const rootEnvPath = path.resolve(__dirname, '../.env');

const envPath = fs.existsSync(localEnvPath)
  ? localEnvPath
  : rootEnvPath;

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, dirname(envPath), '');

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT) || 5173,
      host: true
    },
    envDir: dirname(envPath)
  }
})
