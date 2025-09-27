#!/bin/bash

# 批量更新404页面的网站名称
for dir in athletes competitions data reports rules registration scoring-systems; do
  find "$dir" -name "index.html" -type f | while read file; do
    sed -i 's/中国滑雪赛事积分系统/中国滑雪积分系统/g' "$file"
    echo "Updated: $file"
  done
done
