import { Pool, PoolClient, QueryResult } from 'pg';

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

// 监听连接池错误
pool.on('error', (err: Error) => {
  console.error('数据库连接池错误:', err);
});

/**
 * 执行SQL查询
 */
export async function query<T = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const start = Date.now();
  try {
    const res = await pool.query<T>(text, params);
    const duration = Date.now() - start;

    if (process.env.NODE_ENV === 'development') {
      console.log('执行查询:', { text, duration, rows: res.rowCount });
    }

    return res;
  } catch (error) {
    console.error('查询错误:', error);
    console.error('SQL:', text);
    console.error('参数:', params);
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
    const result = await query('SELECT NOW() as current_time, current_database() as database');
    console.log('数据库连接成功:', result.rows[0]);
    return true;
  } catch (error) {
    console.error('数据库连接失败:', error);
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
