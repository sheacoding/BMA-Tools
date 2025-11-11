# Code Switch v0.1.4

## 更新亮点
- 🧩 **MCP 管理面板**：新增独立 `/mcp` 页面，支持查看/创建/编辑 MCP 服务器、设置启用平台并显示 Claude/Codex 实际启用状态。
- 🧷 **内置服务器模板**：系统默认提供 `reftools` 与 `chrome-devtools` 两种服务器，且会自动与现有 `~/.claude.json` 配置合并。
- 🔐 **占位符校验**：若 URL 或参数含 `{apiKey}` 等未替换变量，将提示用户并阻止启用，避免错误配置。
- 🧭 **设置页导航统一**：应用设置页沿用主界面顶部导航样式，体验一致。
- ☁️ **配置持久化增强**：MCP 保存时会同步更新 `~/.code-switch/mcp.json`、`~/.claude.json`、`~/.codex/config.toml`，确保多平台一致。