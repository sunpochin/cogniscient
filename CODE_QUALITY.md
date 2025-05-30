# 程式碼品質指南

## 概述

本專案已設定**完全自動化**的程式碼品質檢查流程，確保程式碼品質並避免 Vercel 部署時的常見問題。

## 🚀 自動化工作流程

### 1. 開發時自動化

- **VS Code 自動修復**：儲存時自動執行 ESLint 修復和 Prettier 格式化
- **即時檢查**：輸入時即時顯示 ESLint 錯誤和警告
- **快速任務**：使用 `Ctrl+Shift+P` → `Tasks: Run Task` 執行預設任務

### 2. 提交時自動化 (Git Hooks)

- **Pre-commit Hook**：自動執行 ESLint 修復和 Prettier 格式化
- **Commit Message Hook**：檢查 commit 訊息格式
- **只檢查暫存檔案**：使用 lint-staged 提高效率

### 3. 推送後自動化 (GitHub Actions)

- **自動檢查**：ESLint、TypeScript、Prettier 檢查
- **自動修復**：PR 中自動修復可修復的問題並提交
- **建置測試**：確保專案可以正常建置

## 📋 可用的腳本

### 基本檢查

```bash
npm run lint          # 基本 ESLint 檢查
npm run lint:fix      # 自動修復可修復的 ESLint 問題
npm run lint:strict   # 嚴格模式 - 不允許任何警告
npm run type-check    # TypeScript 類型檢查
npm run format        # 自動格式化所有檔案
npm run format:check  # 檢查格式化狀態
```

### 完整檢查

```bash
npm run pre-commit    # 執行所有檢查（Git hook 會自動執行）
```

## 🔧 ESLint 規則說明

### 嚴格檢查的項目

1. **未使用的變數和導入** - 這是 Vercel 最常檢查的問題

   - 所有未使用的變數必須以 `_` 開頭
   - 未使用的導入會被標記為錯誤

2. **React Hooks 規則**

   - `react-hooks/exhaustive-deps` - 確保 useEffect 依賴完整
   - `react-hooks/rules-of-hooks` - 確保 Hooks 使用正確

3. **TypeScript 嚴格規則**

   - 禁止使用 `any` 類型
   - 強制使用 `const` 而非 `let`

4. **程式碼品質**
   - 禁止 `console.log`（允許 `console.warn` 和 `console.error`）
   - 禁止 `debugger` 和 `alert`
   - 強制使用現代 JavaScript 語法

## 💻 VS Code 設定

專案已包含完整的 VS Code 配置：

### 自動化功能

- 儲存時自動修復 ESLint 問題
- 儲存時自動格式化程式碼
- 即時 ESLint 檢查
- 自動移除行尾空白
- 自動添加檔案結尾換行

### 快速任務 (Ctrl+Shift+P → Tasks)

- 🔍 檢查程式碼品質
- 🔧 自動修復程式碼
- 💅 格式化程式碼
- 🏗️ 建置專案

## 🤖 GitHub Actions 自動化

### 每次 Push/PR 自動執行：

1. **程式碼格式檢查**
2. **ESLint 嚴格檢查**
3. **TypeScript 類型檢查**
4. **Next.js 建置測試**

### PR 自動修復功能：

- 自動修復 ESLint 問題
- 自動格式化程式碼
- 自動提交修復結果

## 📝 Commit 訊息格式

系統會自動檢查 commit 訊息格式：

```
<type>(<scope>): <description>
```

### 類型 (type)：

- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔更新
- `style`: 程式碼格式化
- `refactor`: 重構程式碼
- `test`: 測試相關
- `chore`: 其他雜項

### 範例：

```bash
git commit -m "feat: 新增使用者登入功能"
git commit -m "fix(auth): 修復登入驗證問題"
git commit -m "docs: 更新 README"
```

## 🛠️ 常見問題解決

### 未使用的變數

```typescript
// ❌ 錯誤
const unusedVar = 'hello'

// ✅ 正確
const _unusedVar = 'hello' // 或者直接刪除
```

### 未使用的導入

```typescript
// ❌ 錯誤
import { useState, useEffect } from 'react'
// 只使用了 useEffect

// ✅ 正確
import { useEffect } from 'react'
```

### React Hooks 依賴

```typescript
// ❌ 錯誤
useEffect(() => {
  fetchData(userId)
}, []) // 缺少 userId 依賴

// ✅ 正確
useEffect(() => {
  fetchData(userId)
}, [userId])
```

## 🎯 完全自動化的工作流程

### 現在的流程：

1. **寫程式碼** → VS Code 自動修復和格式化
2. **提交程式碼** → Git hooks 自動檢查和修復
3. **推送程式碼** → GitHub Actions 自動檢查和修復
4. **部署到 Vercel** → 保證通過所有檢查

### 您只需要：

- 專心寫程式碼
- 使用正確的 commit 訊息格式
- 其他一切都是自動的！

這樣可以**完全避免** Vercel 部署時被拒絕的問題。
