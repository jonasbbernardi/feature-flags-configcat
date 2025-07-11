import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path, { dirname } from 'path';

const localEnvPath = path.resolve(__dirname, './.env');
const rootEnvPath = path.resolve(__dirname, '../.env');

const envPath = fs.existsSync(localEnvPath)
  ? localEnvPath
  : rootEnvPath;

export default defineConfig({
  plugins: [react()],
  envDir: dirname(envPath)
})
