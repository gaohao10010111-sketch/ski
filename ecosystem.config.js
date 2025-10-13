module.exports = {
  apps: [{
    name: 'ski-api',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3001',
    cwd: '/home/ubuntu/ski',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    env_file: '.env.production',
    error_file: '/home/ubuntu/ski/logs/pm2-error.log',
    out_file: '/home/ubuntu/ski/logs/pm2-out.log',
    log_file: '/home/ubuntu/ski/logs/pm2-combined.log',
    time: true,
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
};
