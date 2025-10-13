#!/bin/bash

echo "========================================="
echo "🧪 API接口测试"
echo "========================================="

# 测试1: 健康检查
echo ""
echo "1️⃣  健康检查测试..."
curl -s http://localhost:3001/api/health | jq .

# 测试2: 用户注册
echo ""
echo "2️⃣  用户注册测试..."
curl -s -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser001","email":"test001@example.com","password":"test123456","name":"测试用户"}' | jq .

# 测试3: 用户登录
echo ""
echo "3️⃣  用户登录测试..."
RESPONSE=$(curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser001","password":"test123456"}')

echo "$RESPONSE" | jq .

# 提取token
TOKEN=$(echo "$RESPONSE" | jq -r '.token')

# 测试4: 获取当前用户信息
echo ""
echo "4️⃣  获取用户信息测试..."
curl -s http://localhost:3001/api/auth/me \
  -H "Authorization: Bearer $TOKEN" | jq .

echo ""
echo "========================================="
echo "✅ API测试完成！"
echo "========================================="
