import { z } from "zod";
import "dotenv/config";

export enum NodeEnv {
  PROD = "prd",
  DEV = "dev",
  TEST = "test",
}

const configSchema = z.object({
  NODE_ENV: z.nativeEnum(NodeEnv).default(NodeEnv.PROD),
});

export const appConfig = configSchema.parse(process.env);
