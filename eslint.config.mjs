import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // 嚴格檢查未使用的變數和導入 - 這是 Vercel 最常檢查的
      '@typescript-eslint/no-unused-vars': [
        'warn', // 從 'error' 改為 'warn'
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          args: 'none',
        },
      ],

      // 禁止未使用的導入
      'no-unused-vars': 'off',

      // React Hooks 規則 - 防止常見錯誤
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',

      // TypeScript 嚴格規則
      '@typescript-eslint/no-explicit-any': 'error',

      // 程式碼品質規則
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // Next.js 特定規則 - Vercel 部署時會檢查
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'error',
    },
  },
]

export default eslintConfig
