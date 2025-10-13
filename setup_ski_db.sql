-- 中国滑雪积分系统数据库初始化脚本
-- 创建独立数据库和用户，确保与其他项目完全隔离

-- 创建数据库
CREATE DATABASE ski_points_prod
  WITH ENCODING='UTF8'
  LC_COLLATE='en_US.UTF-8'
  LC_CTYPE='en_US.UTF-8'
  TEMPLATE=template0
  OWNER=postgres;

-- 创建专用用户
CREATE USER ski_user WITH ENCRYPTED PASSWORD 'SkiPoints2024!Secure';

-- 授予数据库权限
GRANT ALL PRIVILEGES ON DATABASE ski_points_prod TO ski_user;

-- 连接到新数据库并设置权限
\c ski_points_prod

-- 授予schema权限
GRANT ALL ON SCHEMA public TO ski_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ski_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO ski_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO ski_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO ski_user;

-- 显示确认信息
\echo '✅ 数据库 ski_points_prod 创建成功'
\echo '✅ 用户 ski_user 创建成功'
\echo '✅ 权限配置完成'
