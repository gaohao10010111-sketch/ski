#!/bin/bash

# 移除v4.0版本号表述
find . -name "index.html" -type f | while read file; do
  sed -i 's/基于中国高山滑雪赛事积分规则v4\.0/基于中国高山滑雪赛事积分规则/g' "$file"
  sed -i 's/中国高山滑雪积分规则v4\.0/中国高山滑雪积分规则/g' "$file"
  sed -i 's/高山滑雪中国积分规则v4\.0标准/高山滑雪中国积分规则标准/g' "$file"
  echo "Fixed descriptions in: $file"
done
