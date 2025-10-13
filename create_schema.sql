-- 中国滑雪积分系统数据库表结构
-- 基于BACKEND_PLAN.md设计

-- 用户表 (Users)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    role VARCHAR(50) DEFAULT 'user',
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_login TIMESTAMP
);

-- 运动员表 (Athletes)
CREATE TABLE athletes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    fis_code VARCHAR(50) UNIQUE,
    nationality VARCHAR(10) DEFAULT 'CHN',
    birth_date DATE,
    gender VARCHAR(10),
    discipline VARCHAR(50), -- DH, SL, GS, SG, AC
    team VARCHAR(100),
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 比赛表 (Competitions)
CREATE TABLE competitions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    location VARCHAR(200),
    event_date DATE NOT NULL,
    discipline VARCHAR(50) NOT NULL,
    level VARCHAR(10) NOT NULL, -- A级/B级/C级
    race_coefficient DECIMAL(3,1) NOT NULL, -- 1.0, 0.6, 0.3
    status VARCHAR(20) DEFAULT 'scheduled', -- scheduled, ongoing, completed, cancelled
    organizer VARCHAR(200),
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 成绩表 (Results)
CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    competition_id INTEGER REFERENCES competitions(id) ON DELETE CASCADE,
    athlete_id INTEGER REFERENCES athletes(id) ON DELETE CASCADE,
    rank INTEGER,
    time_seconds DECIMAL(10,3),
    dnf BOOLEAN DEFAULT FALSE,
    dns BOOLEAN DEFAULT FALSE,
    dq BOOLEAN DEFAULT FALSE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(competition_id, athlete_id)
);

-- 积分表 (Points)
CREATE TABLE points (
    id SERIAL PRIMARY KEY,
    athlete_id INTEGER REFERENCES athletes(id) ON DELETE CASCADE,
    competition_id INTEGER REFERENCES competitions(id) ON DELETE CASCADE,
    discipline VARCHAR(50) NOT NULL,
    base_race_points DECIMAL(10,2) NOT NULL, -- 基础比赛积分
    penalty_points DECIMAL(10,2) DEFAULT 0.00, -- 判罚分
    race_coefficient DECIMAL(3,1) NOT NULL, -- 赛事系数
    final_points DECIMAL(10,2) NOT NULL, -- 最终积分
    race_date DATE NOT NULL,
    calculation_method VARCHAR(50) DEFAULT 'v4.0', -- 积分计算版本
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(athlete_id, competition_id)
);

-- 报名表 (Registrations)
CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    competition_id INTEGER REFERENCES competitions(id) ON DELETE CASCADE,
    athlete_id INTEGER REFERENCES athletes(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected, cancelled
    registration_date TIMESTAMP DEFAULT NOW(),
    payment_status VARCHAR(20) DEFAULT 'unpaid', -- unpaid, paid, refunded
    payment_amount DECIMAL(10,2),
    notes TEXT,
    reviewed_by INTEGER REFERENCES users(id),
    reviewed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(competition_id, athlete_id)
);

-- 规则文档表 (Rules)
CREATE TABLE rules (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    version VARCHAR(50),
    category VARCHAR(100), -- 积分规则, 竞赛规则, FIS规则等
    content TEXT,
    file_url VARCHAR(500),
    language VARCHAR(10) DEFAULT 'zh-CN',
    status VARCHAR(20) DEFAULT 'active',
    effective_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 系统日志表 (Audit Logs)
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50), -- users, athletes, competitions, etc.
    entity_id INTEGER,
    old_value JSONB,
    new_value JSONB,
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 创建索引以提升查询性能
CREATE INDEX idx_athletes_fis_code ON athletes(fis_code);
CREATE INDEX idx_athletes_user_id ON athletes(user_id);
CREATE INDEX idx_points_athlete_id ON points(athlete_id);
CREATE INDEX idx_points_race_date ON points(race_date);
CREATE INDEX idx_points_athlete_date ON points(athlete_id, race_date);
CREATE INDEX idx_competitions_date ON competitions(event_date);
CREATE INDEX idx_competitions_level ON competitions(level);
CREATE INDEX idx_results_competition ON results(competition_id);
CREATE INDEX idx_results_athlete ON results(athlete_id);
CREATE INDEX idx_registrations_competition ON registrations(competition_id);
CREATE INDEX idx_registrations_athlete ON registrations(athlete_id);
CREATE INDEX idx_registrations_status ON registrations(status);
CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);

-- 创建视图：运动员最新积分排名
CREATE VIEW athlete_current_points AS
SELECT
    a.id as athlete_id,
    a.fis_code,
    a.name,
    a.nationality,
    p.discipline,
    p.final_points,
    p.race_date,
    RANK() OVER (PARTITION BY p.discipline ORDER BY p.final_points ASC) as ranking
FROM athletes a
LEFT JOIN (
    SELECT DISTINCT ON (athlete_id, discipline)
        athlete_id,
        discipline,
        final_points,
        race_date
    FROM points
    ORDER BY athlete_id, discipline, race_date DESC
) p ON a.id = p.athlete_id
WHERE a.status = 'active';

-- 插入默认管理员用户 (密码: admin123，实际使用时应该用bcrypt加密)
INSERT INTO users (email, username, password_hash, name, role) VALUES
('admin@ski.cn', 'admin', '$2b$10$placeholder_hash_replace_in_production', '系统管理员', 'admin');

-- 显示创建成功的表
\dt

\echo '✅ 数据库表结构创建成功'
\echo '✅ 索引创建成功'
\echo '✅ 视图创建成功'
\echo ''
\echo '📊 数据库统计：'
SELECT
    schemaname,
    COUNT(*) as table_count
FROM pg_tables
WHERE schemaname = 'public'
GROUP BY schemaname;
