/**
 * 单位名称标准化映射表
 * 将PDF中的各种变体名称统一为标准名称
 */

export const teamNameMapping: Record<string, string> = {
  // 石家庄市冰雪与足球运动 - 统一为"石家庄市冰雪与足球运动中心"
  "石家庄市冰雪与足球运动推广训练中心": "石家庄市冰雪与足球运动中心",
  "石家庄市冰雪与足球运动推广与训练中心": "石家庄市冰雪与足球运动中心",

  // 重庆市沙坪坝区体育运动 - 统一为"重庆市沙坪坝区体育运动学校"
  "重庆市沙坪坝区体育运动中心": "重庆市沙坪坝区体育运动学校",

  // 零站/零战单板滑雪俱乐部 - 统一为"零站单板滑雪俱乐部"
  "零战单板滑雪俱乐部": "零站单板滑雪俱乐部",
}

/**
 * 标准化单位名称
 */
export function normalizeTeamName(team: string): string {
  return teamNameMapping[team] || team
}

/**
 * 获取所有需要映射的旧名称
 */
export function getOldTeamNames(): string[] {
  return Object.keys(teamNameMapping)
}

/**
 * 获取标准名称
 */
export function getStandardTeamName(oldName: string): string | undefined {
  return teamNameMapping[oldName]
}
