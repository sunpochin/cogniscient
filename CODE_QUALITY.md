# 程式碼品質指南

## 概述

本專案已設定嚴格的 ESLint 規則，以確保程式碼品質並避免 Vercel 部署時的常見問題。

## 可用的腳本

### 基本檢查

```bash
npm run lint          # 基本 ESLint 檢查
npm run lint:fix      # 自動修復可修復的 ESLint 問題
npm run lint:strict   # 嚴格模式 - 不允許任何警告
npm run type-check    # TypeScript 類型檢查
```

### 完整檢查

```bash
npm run pre-commit    # 執行所有檢查（建議在提交前執行）
```

## ESLint 規則說明

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

## VS Code 設定

專案已包含 `.vscode/settings.json`，提供：

- 儲存時自動修復 ESLint 問題
- 即時 ESLint 檢查
- 自動格式化程式碼

## GitHub Actions

每次 PR 都會自動執行：

1. ESLint 嚴格檢查
2. TypeScript 類型檢查
3. Next.js 建置測試

## 常見問題解決

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

## 建議的工作流程

1. 開發時：使用 VS Code，會自動檢查和修復
2. 提交前：執行 `npm run pre-commit`
3. 推送後：GitHub Actions 會自動檢查

這樣可以確保程式碼品質，避免 Vercel 部署時被拒絕。
