import express from "express";
import cors from "cors";
import triageRoutes from "./routes/triage";
import adminRoutes from "./routes/admin";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", triageRoutes);
app.use("/api/admin", adminRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});