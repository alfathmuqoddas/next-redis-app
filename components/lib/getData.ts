import pool from "@/db"; // Import the connection pool

export async function getData(
  id: number
): Promise<Record<string, unknown> | null> {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    const data = result.rows[0];
    client.release();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
