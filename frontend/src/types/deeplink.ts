// 深度链接导入请求类型（独立于生成的 bindings，避免生成差异）

export interface DeepLinkImportRequest {
  version: string
  resource: string
  app: string
  name: string
  homepage: string
  endpoint: string
  apiKey: string
  // 后端可能返回 null，这里放宽为 string | null
  model?: string | null
  notes?: string | null
  haikuModel?: string | null
  sonnetModel?: string | null
  opusModel?: string | null
  config?: string | null
  configFormat?: string | null
  configUrl?: string | null
}
