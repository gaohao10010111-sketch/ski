import { Pool, PoolClient, QueryResult, QueryResultRow } from 'pg';

// PostgreSQL连接池配置
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'ski_user',
  password: process.env.POSTGRES_PASSWORD || 'SkiPoints2024!Secure',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'ski_points_prod',
  max: 20, // 最大连接数
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// 监听连接池错误 - 生产环境不输出到控制台
pool.on('error', () => {
  // 错误已被Pool处理，避免控制台输出
});

/**
 * 执行SQL查询
 */
export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<QueryResult<T>> {
  try {
    const res = await pool.query<T>(text, params);
    return res;
  } catch (error) {
    // 重新抛出错误，让调用方处理
    throw error;
  }
}

/**
 * 获取数据库客户端（用于事务）
 */
export async function getClient(): Promise<PoolClient> {
  const client = await pool.connect();
  return client;
}

/**
 * 执行事务
 */
export async function transaction<T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

/**
 * 测试数据库连接
 */
export async function testConnection(): Promise<boolean> {
  try {
    await query('SELECT NOW() as current_time, current_database() as database');
    return true;
  } catch {
    return false;
  }
}

// 导出连接池以供直接使用（如果需要）
export { pool };

const db = {
  query,
  getClient,
  transaction,
  testConnection,
  pool,
};

export default db;
