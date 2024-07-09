import { Pool } from "pg";

interface DatabaseConfig {
  connectionString: string;
}

const connectionString = process.env.POSTGRES_URL as string; // Type assertion for env variable

const pool = new Pool({ connectionString } as DatabaseConfig);

export default pool;
