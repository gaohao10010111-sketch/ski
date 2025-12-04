#!/usr/bin/env node

/**
 * PDF解析器测试脚本
 * 用于测试官方成绩册PDF的解析功能
 *
 * 使用方法: node scripts/test-pdf-parser.js [pdf文件路径]
 *
 * 注意: 此脚本需要在支持ESM的环境中运行
 * 可以通过API路由在浏览器中测试PDF上传功能
 */

const fs = require('fs')
const path = require('path')

// 检测比赛类型
function detectCompetitionType(text) {
  if (text.includes('大跳台') || text.includes('Big Air') || text.includes('BA')) {
    if (text.includes('单板') || text.includes('Snowboard')) {
      return 'snowboard_bigair'
    }
    return 'freestyle_slopestyle'
  }
  if (text.includes('坡面障碍') || text.includes('Slopestyle') || text.includes('SS')) {
    if (text.includes('单板') || text.includes('Snowboard')) {
      return 'snowboard_bigair'
    }
    return 'freestyle_slopestyle'
  }
  if (text.includes('平行') || text.includes('Parallel') || text.includes('PGS') || text.includes('PSL')) {
    return 'snowboard_parallel'
  }
  return 'alpine'
}

// 检测年龄组
function detectAgeGroup(text) {
  if (text.includes('U11') || text.includes('U-11')) return 'U11'
  if (text.includes('U12') || text.includes('U-12')) return 'U12'
  if (text.includes('U15') || text.includes('U-15')) return 'U15'
  if (text.includes('U18') || text.includes('U-18')) return 'U18'
  return '成人'
}

// 检测性别
function detectGender(text) {
  if (text.includes('女子') || text.includes('女运动员')) return '女子'
  if (text.includes('男子') || text.includes('男运动员')) return '男子'
  if (text.toLowerCase().includes('women') || text.toLowerCase().includes('ladies')) return '女子'
  if (text.toLowerCase().includes('men') && !text.toLowerCase().includes('women')) return '男子'
  return '混合'
}

// 检测项目名称
function detectDiscipline(text) {
  if (text.includes('回转') && !text.includes('大回转')) return '回转 (SL)'
  if (text.includes('大回转')) return '大回转 (GS)'
  if (text.includes('超级大回转') || text.includes('SG')) return '超级大回转 (SG)'
  if (text.includes('大跳台')) return '大跳台 (BA)'
  if (text.includes('坡面障碍')) return '坡面障碍 (SS)'
  if (text.includes('平行大回转') || text.includes('PGS')) return '平行大回转 (PGS)'
  if (text.includes('平行回转') || text.includes('PSL')) return '平行回转 (PSL)'
  return '未知'
}

function showUsage() {
  console.log('='.repeat(60))
  console.log('PDF解析功能测试说明')
  console.log('='.repeat(60))
  console.log('')
  console.log('由于Node.js环境限制，请通过以下方式测试PDF解析功能:')
  console.log('')
  console.log('1. 启动开发服务器:')
  console.log('   npm run dev')
  console.log('')
  console.log('2. 打开浏览器访问:')
  console.log('   http://localhost:3000/results-import')
  console.log('')
  console.log('3. 上传PDF文件进行测试')
  console.log('')
  console.log('测试文件:')
  console.log('   - score1.pdf (高山滑雪U系列成绩)')
  console.log('   - score2.pdf (单板大跳台U系列成绩)')
  console.log('')
  console.log('='.repeat(60))
}

// 检查PDF文件是否存在
const args = process.argv.slice(2)
const score1Path = path.join(__dirname, '..', 'score1.pdf')
const score2Path = path.join(__dirname, '..', 'score2.pdf')

console.log('检查PDF文件:')
console.log(`  - score1.pdf: ${fs.existsSync(score1Path) ? '存在' : '不存在'}`)
console.log(`  - score2.pdf: ${fs.existsSync(score2Path) ? '存在' : '不存在'}`)
console.log('')

showUsage()
