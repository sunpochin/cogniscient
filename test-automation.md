# 🧪 自動化測試指南

## 測試 Git Hooks

### 測試 Pre-commit Hook

```bash
# 1. 修改一個檔案（故意加入錯誤）
echo "const unused = 'test'" >> src/app/test.ts

# 2. 暫存檔案
git add src/app/test.ts

# 3. 嘗試提交（會自動修復）
git commit -m "test: 測試 pre-commit hook"
```

### 測試 Commit Message Hook

```bash
# ❌ 這會失敗
git commit -m "bad commit message"

# ✅ 這會成功
git commit -m "feat: 測試功能"
```

## 測試 VS Code 自動化

1. 在 VS Code 中打開任何 `.ts` 或 `.tsx` 檔案
2. 故意加入一些錯誤：
   ```typescript
   import { useState } from 'react' // 未使用的導入
   const unused = 'test' // 未使用的變數
   console.log('debug') // 不建議的 console.log
   ```
3. 儲存檔案 (Ctrl+S)
4. 觀察自動修復效果

## 測試 GitHub Actions

1. 建立一個新分支
2. 推送一些有問題的程式碼
3. 建立 Pull Request
4. 觀察 GitHub Actions 自動檢查和修復

## 驗證完整流程

執行以下命令確保一切正常：

```bash
# 檢查所有腳本
npm run lint
npm run lint:fix
npm run lint:strict
npm run type-check
npm run format
npm run format:check
npm run pre-commit

# 檢查建置
npm run build
```

如果所有命令都成功執行，表示自動化設定完成！
