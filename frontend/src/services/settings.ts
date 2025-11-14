/**
 * 全局配置服务 API 封装
 */
import { Call } from '@wailsio/runtime'

const SETTINGS_SERVICE = 'codeswitch/services.SettingsService'

export interface BlacklistSettings {
  failureThreshold: number // 失败次数阈值（1-10）
  durationMinutes: number  // 拉黑时长（分钟：15/30/60）
}

/**
 * 获取拉黑配置
 */
export const getBlacklistSettings = async (): Promise<BlacklistSettings> => {
  const result = await Call.ByName(`${SETTINGS_SERVICE}.GetBlacklistSettingsStruct`)
  return result as BlacklistSettings
}

/**
 * 更新拉黑配置
 * @param threshold 失败阈值（1-10）
 * @param duration 拉黑时长（15/30/60 分钟）
 */
export const updateBlacklistSettings = async (
  threshold: number,
  duration: number
): Promise<void> => {
  await Call.ByName(`${SETTINGS_SERVICE}.UpdateBlacklistSettings`, threshold, duration)
}
