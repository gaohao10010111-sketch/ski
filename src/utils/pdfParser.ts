// PDF成绩解析器工具类
// 支持解析官方比赛成绩PDF文件

export type CompetitionType = 'alpine' | 'snowboard_bigair' | 'snowboard_parallel' | 'freestyle_slopestyle'

export interface ParsedCompetitionData {
  // 比赛基本信息
  competitionInfo: {
    name: string                    // 比赛名称
    season: string                  // 赛季
    location: string                // 比赛地点
    date: string                    // 比赛日期
    discipline: string              // 项目类型
    ageGroup: string                // 年龄组 (U11/U15/U18)
    gender: string                  // 性别 (男/女)
    type: CompetitionType           // 比赛类型
  }

  // 官员信息
  officials: {
    technicalDelegate?: string      // 技术代表
    referee?: string                // 裁判长
    chiefOfCompetition?: string     // 竞赛长
    chiefOfCourse?: string          // 线路长
  }

  // 赛道信息 (高山滑雪特有)
  courseInfo?: {
    courseName?: string             // 线路名称
    startElevation?: string         // 起点高度
    finishElevation?: string        // 终点高度
    verticalDrop?: string           // 落差
    courseLength?: string           // 线路长度
    gates?: string                  // 旗门数
    turningGates?: string           // 方向旗门数
    homologation?: string           // 认证编号
  }

  // 天气信息
  weather?: {
    condition?: string              // 天气状况
    snow?: string                   // 雪况
    temperature?: string            // 气温
  }

  // 运动员成绩
  results: AlpineResult[] | BigAirResult[]
}

// 高山滑雪成绩（时间制）
export interface AlpineResult {
  rank: number                      // 排名
  bib: number                       // 号码
  name: string                      // 姓名
  organization: string              // 单位
  run1Time?: string                 // 第一轮成绩
  run2Time?: string                 // 第二轮成绩
  totalTime?: string                // 总成绩
  difference?: string               // 差距
  points: number                    // 积分
  status: 'OK' | 'DNS' | 'DNF' | 'DSQ' | 'DQ'  // 状态
}

// 单板/自由式大跳台成绩（裁判评分制）
export interface BigAirResult {
  rank: number                      // 排名
  bib: number                       // 号码
  name: string                      // 姓名
  organization: string              // 单位
  birthYear?: number                // 出生年份
  stance?: 'G' | 'R'                // 站位 (Regular/Goofy)
  rounds: {
    round: number                   // 轮次
    j1?: number                     // 裁判1评分
    j2?: number                     // 裁判2评分
    j3?: number                     // 裁判3评分
    j4?: number                     // 裁判4评分
    j5?: number                     // 裁判5评分
    score: number                   // 单轮得分
  }[]
  finalScore: number                // 最终成绩（最佳两轮之和）
  points: number                    // 积分
  status: 'OK' | 'DNS' | 'DNF' | 'DSQ' | 'DQ'
}

// 解析PDF文本内容的辅助函数
export class PDFResultParser {

  // 检测比赛类型
  static detectCompetitionType(text: string): CompetitionType {
    if (text.includes('大跳台') || text.includes('Big Air') || text.includes('BA')) {
      if (text.includes('单板') || text.includes('Snowboard')) {
        return 'snowboard_bigair'
      }
      return 'freestyle_slopestyle'
    }
    if (text.includes('坡面障碍') || text.includes('Slopestyle') || text.includes('SS')) {
      if (text.includes('单板') || text.includes('Snowboard')) {
        return 'snowboard_bigair'  // 使用相同的评分制
      }
      return 'freestyle_slopestyle'
    }
    if (text.includes('平行') || text.includes('Parallel') || text.includes('PGS') || text.includes('PSL')) {
      return 'snowboard_parallel'
    }
    return 'alpine'  // 默认为高山滑雪
  }

  // 检测年龄组
  static detectAgeGroup(text: string): string {
    if (text.includes('U11') || text.includes('U-11')) return 'U11'
    if (text.includes('U12') || text.includes('U-12')) return 'U11'
    if (text.includes('U15') || text.includes('U-15')) return 'U15'
    if (text.includes('U18') || text.includes('U-18')) return 'U18'
    return '成人'
  }

  // 检测性别
  static detectGender(text: string): string {
    // 优先检测中文
    if (text.includes('女子') || text.includes('女运动员')) return '女子'
    if (text.includes('男子') || text.includes('男运动员')) return '男子'
    // 英文检测
    if (text.toLowerCase().includes('women') || text.toLowerCase().includes('ladies')) return '女子'
    if (text.toLowerCase().includes('men') && !text.toLowerCase().includes('women')) return '男子'
    return '混合'
  }

  // 检测项目名称
  static detectDiscipline(text: string): string {
    if (text.includes('回转') && !text.includes('大回转')) return '回转 (SL)'
    if (text.includes('大回转')) return '大回转 (GS)'
    if (text.includes('超级大回转') || text.includes('SG')) return '超级大回转 (SG)'
    if (text.includes('大跳台')) return '大跳台 (BA)'
    if (text.includes('坡面障碍')) return '坡面障碍 (SS)'
    if (text.includes('平行大回转') || text.includes('PGS')) return '平行大回转 (PGS)'
    if (text.includes('平行回转') || text.includes('PSL')) return '平行回转 (PSL)'
    return '未知'
  }

  // 提取比赛基本信息
  static extractCompetitionInfo(text: string): ParsedCompetitionData['competitionInfo'] {
    const type = this.detectCompetitionType(text)

    // 提取赛季
    const seasonMatch = text.match(/(\d{4}-\d{4})\s*赛季/) || text.match(/(\d{4})-(\d{2,4})/)
    const season = seasonMatch ? seasonMatch[0] : '2025-2026赛季'

    // 提取比赛名称
    let name = ''
    const nameMatch = text.match(/全国.*?比赛.*?站/) ||
                      text.match(/全国.*?U系列.*?比赛/) ||
                      text.match(/2\d{3}-\d{2,4}.*?比赛.*?站/)
    if (nameMatch) {
      name = nameMatch[0]
    }

    // 提取地点
    const locationMatch = text.match(/（([^）]+站)）/) || text.match(/\(([^)]+站)\)/)
    const location = locationMatch ? locationMatch[1] : ''

    // 提取日期
    const dateMatch = text.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/) ||
                      text.match(/日期[：:]\s*(\d{4}[-/]\d{1,2}[-/]\d{1,2})/)
    const date = dateMatch ? dateMatch[0] : ''

    return {
      name,
      season,
      location,
      date,
      discipline: this.detectDiscipline(text),
      ageGroup: this.detectAgeGroup(text),
      gender: this.detectGender(text),
      type
    }
  }

  // 提取官员信息
  static extractOfficials(text: string): ParsedCompetitionData['officials'] {
    const officials: ParsedCompetitionData['officials'] = {}

    // 技术代表
    const tdMatch = text.match(/技术代表[：:]\s*([^\n\r]+)/)
    if (tdMatch) officials.technicalDelegate = tdMatch[1].trim()

    // 裁判长
    const refereeMatch = text.match(/裁判长[：:]\s*([^\n\r]+)/)
    if (refereeMatch) officials.referee = refereeMatch[1].trim()

    // 竞赛长
    const chiefMatch = text.match(/竞赛长[：:]\s*([^\n\r]+)/)
    if (chiefMatch) officials.chiefOfCompetition = chiefMatch[1].trim()

    // 线路长
    const courseChiefMatch = text.match(/线路长[：:]\s*([^\n\r]+)/)
    if (courseChiefMatch) officials.chiefOfCourse = courseChiefMatch[1].trim()

    return officials
  }

  // 提取赛道信息（高山滑雪）
  static extractCourseInfo(text: string): ParsedCompetitionData['courseInfo'] {
    const courseInfo: ParsedCompetitionData['courseInfo'] = {}

    // 线路名称
    const nameMatch = text.match(/线路名称[：:]\s*([^\n\r]+)/)
    if (nameMatch) courseInfo.courseName = nameMatch[1].trim()

    // 起点高度
    const startMatch = text.match(/起点高度[：:]\s*(\d+)\s*m?/)
    if (startMatch) courseInfo.startElevation = startMatch[1] + 'm'

    // 终点高度
    const finishMatch = text.match(/终点高度[：:]\s*(\d+)\s*m?/)
    if (finishMatch) courseInfo.finishElevation = finishMatch[1] + 'm'

    // 落差
    const dropMatch = text.match(/落差[：:]\s*(\d+)\s*m?/)
    if (dropMatch) courseInfo.verticalDrop = dropMatch[1] + 'm'

    // 线路长度
    const lengthMatch = text.match(/线路长度[：:]\s*(\d+)\s*m?/)
    if (lengthMatch) courseInfo.courseLength = lengthMatch[1] + 'm'

    // 旗门数
    const gatesMatch = text.match(/旗门数[：:]\s*(\d+)/)
    if (gatesMatch) courseInfo.gates = gatesMatch[1]

    // 方向旗门
    const turningMatch = text.match(/方向旗门[：:]\s*(\d+)/)
    if (turningMatch) courseInfo.turningGates = turningMatch[1]

    return courseInfo
  }

  // 解析高山滑雪成绩表格
  static parseAlpineResults(text: string): AlpineResult[] {
    const results: AlpineResult[] = []

    // 匹配成绩行的正则表达式
    // 格式: 排名 号码 姓名 单位 第一轮 第二轮 总成绩 差距 积分
    const resultPattern = /(\d+)\s+(\d+)\s+([\u4e00-\u9fa5·]+)\s+([\u4e00-\u9fa5/]+)\s+(\d{1,2}:\d{2}\.\d{2}|\d+\.\d{2}|DNS|DNF|DSQ|DQ)?\s*(\d{1,2}:\d{2}\.\d{2}|\d+\.\d{2}|DNS|DNF|DSQ|DQ)?\s*(\d{1,2}:\d{2}\.\d{2}|\d+\.\d{2})?\s*([\+\-]?\d+\.\d{2})?\s*(\d+)/g

    let match
    while ((match = resultPattern.exec(text)) !== null) {
      const [, rank, bib, name, org, run1, run2, total, diff, points] = match

      // 确定状态
      let status: AlpineResult['status'] = 'OK'
      if (run1 === 'DNS' || run2 === 'DNS') status = 'DNS'
      else if (run1 === 'DNF' || run2 === 'DNF') status = 'DNF'
      else if (run1 === 'DSQ' || run1 === 'DQ' || run2 === 'DSQ' || run2 === 'DQ') status = 'DSQ'

      results.push({
        rank: parseInt(rank),
        bib: parseInt(bib),
        name: name.trim(),
        organization: org.trim(),
        run1Time: run1 && !['DNS', 'DNF', 'DSQ', 'DQ'].includes(run1) ? run1 : undefined,
        run2Time: run2 && !['DNS', 'DNF', 'DSQ', 'DQ'].includes(run2) ? run2 : undefined,
        totalTime: total || undefined,
        difference: diff || undefined,
        points: parseInt(points) || 0,
        status
      })
    }

    // 如果正则没有匹配到，尝试更宽松的解析
    if (results.length === 0) {
      const lines = text.split('\n')
      for (const line of lines) {
        // 简化的行解析
        const simpleMatch = line.match(/^(\d+)\s+(\d+)\s+([\u4e00-\u9fa5·]+)\s+(.+?)\s+(\d+)\s*$/)
        if (simpleMatch) {
          const [, rank, bib, name, middle, points] = simpleMatch
          results.push({
            rank: parseInt(rank),
            bib: parseInt(bib),
            name: name.trim(),
            organization: middle.split(/\s+/)[0] || '',
            points: parseInt(points) || 0,
            status: 'OK'
          })
        }
      }
    }

    return results
  }

  // 积分表（1-50名的标准积分）
  private static readonly POINTS_TABLE = [
    360, 329, 303, 280, 260, 242, 226, 212, 199, 187,
    176, 166, 157, 149, 141, 134, 127, 121, 115, 109,
    104, 99, 94, 90, 86, 82, 78, 75, 72, 69,
    66, 64, 62, 60, 58, 56, 54, 52, 50, 48,
    46, 44, 42, 40, 38, 36, 34, 32, 30, 28,
    26, 24, 22, 20, 18, 16, 14, 12, 10, 8,
    6, 4, 2, 1
  ]

  // 解析单板/自由式大跳台成绩表格
  static parseBigAirResults(text: string): BigAirResult[] {
    const results: BigAirResult[] = []

    // 检查是否包含成绩公告
    const hasResults = text.includes('成 绩 公 告') || text.includes('成绩公告')
    if (!hasResults) {
      // 尝试旧的解析方法
      return this.parseBigAirResultsLegacy(text)
    }

    // 新的解析方法：基于PDF文本流的连续解析
    // 单板大跳台成绩格式: 排名 姓名 单位 号码 站姿 ...评分数据... 出生年 ...数据... 积分

    // 1. 先找所有 "数字 中文姓名" 的模式作为起点
    const starts: Array<{rank: number, name: string, position: number}> = []
    const startRegex = /(\d{1,2})\s+([\u4e00-\u9fa5·]{2,4})\s+/g
    let match

    while ((match = startRegex.exec(text)) !== null) {
      const rank = parseInt(match[1])
      // 只接受1-50范围内的排名
      if (rank >= 1 && rank <= 50) {
        starts.push({
          rank: rank,
          name: match[2],
          position: match.index
        })
      }
    }

    // 2. 过滤：只保留排名递增的序列（处理重复匹配）
    const validStarts: Array<{rank: number, name: string, position: number}> = []
    let lastRank = 0

    for (const start of starts) {
      // 检查是否是有效的新运动员
      if (start.rank === 1 && validStarts.length === 0) {
        validStarts.push(start)
        lastRank = 1
      } else if (start.rank > lastRank && start.rank <= lastRank + 3) {
        // 允许跳过1-2个排名（可能有DNS/DNF）
        validStarts.push(start)
        lastRank = start.rank
      } else if (start.rank === 1 && lastRank > 0) {
        // 新的年龄组开始，重置
        // 先保存之前的结果，再开始新组
        validStarts.push(start)
        lastRank = 1
      }
    }

    // 3. 对每个运动员，提取从当前位置到下一个运动员之间的文本
    for (let i = 0; i < validStarts.length; i++) {
      const current = validStarts[i]
      const nextPos = i < validStarts.length - 1 ? validStarts[i + 1].position : text.length
      const athleteText = text.substring(current.position, nextPos)

      // 从athleteText中提取信息
      // 格式: 排名 姓名 单位 号码 站姿 ... 出生年 ... 积分

      // 尝试多种单位名称匹配模式
      const orgPatterns = [
        /[\u4e00-\u9fa5·]+\s+([\u4e00-\u9fa5\s]+?(?:中心|个人|学院|学校|运动|奇迹|体育局|职业|管理))\s*(\d{1,3})\s+([GR])/,
        /[\u4e00-\u9fa5·]+\s+([\u4e00-\u9fa5\s]+?省[\u4e00-\u9fa5\s]*?)\s*(\d{1,3})\s+([GR])/,
        /[\u4e00-\u9fa5·]+\s+([\u4e00-\u9fa5\s]+?市[\u4e00-\u9fa5\s]*?)\s*(\d{1,3})\s+([GR])/,
        /[\u4e00-\u9fa5·]+\s+([^\d]+?)\s*(\d{1,3})\s+([GR])/
      ]

      let detailMatch = null
      for (const pattern of orgPatterns) {
        detailMatch = athleteText.match(pattern)
        if (detailMatch) break
      }

      // 提取出生年（4位数字，2000-2019范围）
      const yearMatch = athleteText.match(/\b(201[0-9]|200[0-9])\b/g)
      const birthYear = yearMatch ? yearMatch[yearMatch.length - 1] : null

      // 根据排名确定积分
      const expectedPoints = this.POINTS_TABLE[current.rank - 1] || 0

      // 验证积分值是否在文本中
      const hasExpectedPoints = athleteText.includes(String(expectedPoints))

      if (detailMatch) {
        const organization = detailMatch[1].replace(/\s+/g, '').trim()
        const bib = parseInt(detailMatch[2])
        const stance = detailMatch[3] as 'G' | 'R'

        results.push({
          rank: current.rank,
          bib: bib,
          name: current.name,
          organization: organization,
          birthYear: birthYear ? parseInt(birthYear) : undefined,
          stance: stance,
          rounds: [], // 简化处理，不解析详细轮次
          finalScore: 0, // 可后续从积分反推
          points: hasExpectedPoints ? expectedPoints : 0,
          status: 'OK'
        })
      } else {
        // 即使没有匹配到详细信息，也创建基本记录
        results.push({
          rank: current.rank,
          bib: 0,
          name: current.name,
          organization: '',
          birthYear: birthYear ? parseInt(birthYear) : undefined,
          stance: undefined,
          rounds: [],
          finalScore: 0,
          points: hasExpectedPoints ? expectedPoints : 0,
          status: 'OK'
        })
      }
    }

    return results
  }

  // 旧的大跳台解析方法（兼容性）
  private static parseBigAirResultsLegacy(text: string): BigAirResult[] {
    const results: BigAirResult[] = []

    // 大跳台成绩格式更复杂，包含多轮裁判评分
    // 格式: 排名 号码 姓名 单位 出生年份 站位 轮次1分数 轮次2分数 轮次3分数 最终成绩 积分

    const lines = text.split('\n')
    let currentAthlete: BigAirResult | null = null

    for (const line of lines) {
      // 尝试匹配运动员主行
      const athleteMatch = line.match(/^(\d+)\s+(\d+)\s+([\u4e00-\u9fa5·]+)\s+([\u4e00-\u9fa5/]+)\s+(\d{4})?\s*(G|R)?\s*/)

      if (athleteMatch) {
        // 保存之前的运动员
        if (currentAthlete) {
          results.push(currentAthlete)
        }

        const [, rank, bib, name, org, birthYear, stance] = athleteMatch
        currentAthlete = {
          rank: parseInt(rank),
          bib: parseInt(bib),
          name: name.trim(),
          organization: org.trim(),
          birthYear: birthYear ? parseInt(birthYear) : undefined,
          stance: stance as 'G' | 'R' | undefined,
          rounds: [],
          finalScore: 0,
          points: 0,
          status: 'OK'
        }

        // 尝试从同一行提取分数
        const scoresMatch = line.match(/(\d+\.\d{2})\s*$/g)
        if (scoresMatch && scoresMatch.length >= 2) {
          // 最后一个是积分，倒数第二个是最终成绩
          currentAthlete.points = parseFloat(scoresMatch[scoresMatch.length - 1]) || 0
          currentAthlete.finalScore = parseFloat(scoresMatch[scoresMatch.length - 2]) || 0
        }
      }

      // 尝试匹配轮次分数行
      if (currentAthlete) {
        const roundMatch = line.match(/轮次?(\d)\s+(\d+\.\d{2})?\s*(\d+\.\d{2})?\s*(\d+\.\d{2})?\s*(\d+\.\d{2})?\s*(\d+\.\d{2})?\s*(\d+\.\d{2})/)
        if (roundMatch) {
          const [, round, j1, j2, j3, j4, j5, score] = roundMatch
          currentAthlete.rounds.push({
            round: parseInt(round),
            j1: j1 ? parseFloat(j1) : undefined,
            j2: j2 ? parseFloat(j2) : undefined,
            j3: j3 ? parseFloat(j3) : undefined,
            j4: j4 ? parseFloat(j4) : undefined,
            j5: j5 ? parseFloat(j5) : undefined,
            score: parseFloat(score) || 0
          })
        }
      }
    }

    // 保存最后一个运动员
    if (currentAthlete) {
      results.push(currentAthlete)
    }

    return results
  }

  // 主解析函数 - 根据比赛类型自动选择解析方法
  static parseResults(text: string): ParsedCompetitionData {
    const competitionInfo = this.extractCompetitionInfo(text)
    const officials = this.extractOfficials(text)
    const courseInfo = this.extractCourseInfo(text)

    let results: AlpineResult[] | BigAirResult[]

    if (competitionInfo.type === 'alpine') {
      results = this.parseAlpineResults(text)
    } else {
      results = this.parseBigAirResults(text)
    }

    return {
      competitionInfo,
      officials,
      courseInfo: competitionInfo.type === 'alpine' ? courseInfo : undefined,
      results
    }
  }

  // 将解析结果转换为系统通用格式
  static toCompetitionData(parsed: ParsedCompetitionData) {
    return {
      raceHeader: {
        sector: parsed.competitionInfo.type === 'alpine' ? 'AL' : 'SB',
        sex: parsed.competitionInfo.gender === '女子' ? 'L' : 'M',
        level: 'U-SERIES',
        season: parsed.competitionInfo.season,
        codex: '',
        nation: 'CHN',
        discipline: this.getDisciplineCode(parsed.competitionInfo.discipline),
        category: parsed.competitionInfo.ageGroup,
        type: 'Results',
        raceDate: {
          day: '',
          month: '',
          year: '',
          formatted: parsed.competitionInfo.date
        },
        eventName: parsed.competitionInfo.name,
        place: parsed.competitionInfo.location,
        td: {
          function: 'Delegate',
          number: '',
          lastname: parsed.officials.technicalDelegate || '',
          firstname: '',
          nation: 'CHN'
        }
      },
      jury: {
        referee: {
          function: 'Referee',
          lastname: parsed.officials.referee || '',
          firstname: '',
          nation: 'CHN'
        },
        chiefRace: {
          function: 'Chiefrace',
          lastname: parsed.officials.chiefOfCompetition || '',
          firstname: '',
          nation: 'CHN'
        }
      },
      courses: parsed.courseInfo ? [{
        run: '1',
        name: parsed.courseInfo.courseName || '',
        homologation: parsed.courseInfo.homologation,
        startTime: '',
        gates: parsed.courseInfo.gates || '',
        turningGates: parsed.courseInfo.turningGates || '',
        courseSetter: { lastname: '', firstname: '', nation: 'CHN' },
        startElev: parsed.courseInfo.startElevation || '',
        finishElev: parsed.courseInfo.finishElevation || ''
      }] : [],
      raceInfo: {
        weather: {
          snow: parsed.weather?.snow || '',
          weather: parsed.weather?.condition || '',
          temperatureAirStart: parsed.weather?.temperature || '',
          temperatureAirFinish: ''
        },
        timingBy: '',
        dataProcessingBy: 'China Ski Points System',
        appliedPenalty: '0.00',
        calculatedPenalty: '0.00',
        fValue: ''
      },
      competitors: parsed.results.map((r, index) => ({
        rank: r.rank,
        order: index + 1,
        bib: r.bib,
        fisCode: '',
        lastname: r.name,
        firstname: '',
        sex: parsed.competitionInfo.gender === '女子' ? 'L' : 'M',
        nation: r.organization || 'CHN',  // 使用解析出的单位，默认CHN
        yearOfBirth: 'birthYear' in r ? r.birthYear || 0 : 0,
        status: r.status === 'OK' ? '' : r.status,
        points: r.points,
        // 高山滑雪特有字段
        ...('totalTime' in r ? {
          run1Time: r.run1Time,
          run2Time: r.run2Time,
          totalTime: r.totalTime,
          difference: r.difference
        } : {}),
        // 大跳台特有字段
        ...('rounds' in r ? {
          rounds: r.rounds,
          finalScore: r.finalScore
        } : {})
      }))
    }
  }

  // 获取项目代码
  private static getDisciplineCode(discipline: string): string {
    const codes: Record<string, string> = {
      '回转 (SL)': 'SL',
      '大回转 (GS)': 'GS',
      '超级大回转 (SG)': 'SG',
      '大跳台 (BA)': 'BA',
      '坡面障碍 (SS)': 'SS',
      '平行大回转 (PGS)': 'PGS',
      '平行回转 (PSL)': 'PSL'
    }
    return codes[discipline] || 'UNKNOWN'
  }
}

// 类型守卫
export function isAlpineResult(result: AlpineResult | BigAirResult): result is AlpineResult {
  return 'totalTime' in result || !('rounds' in result)
}

export function isBigAirResult(result: AlpineResult | BigAirResult): result is BigAirResult {
  return 'rounds' in result
}
