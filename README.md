# Cogniscient

## 網站

https://cogniscient.vercel.app/

> 一家致力於人工智慧與人性化設計交集的顧問公司。

Cogniscient 是一個使用 Next.js 建置的現代化網站應用程式，旨在展示 AI-UX 顧問服務。我們運用在認知科學、機器學習、電腦科學和機械工程領域的深厚專業知識，協助打造兼具直覺、信賴和效率的互動式 AI 產品。

## ✨ 功能亮點

- **🎨 現代化 UI/UX**：採用 Material-UI 和 Tailwind CSS 建構
- **📱 響應式設計**：針對桌面和行動裝置進行優化
- **🚀 極速性能**：透過 Next.js 實現伺服器端渲染 (SSR)
- **♿ 無障礙設計**：元件符合 WCAG 無障礙網頁內容指引
- **🔧 TypeScript**：完整的型別安全
- **🎯 互動元素**：生命遊戲動畫和聯絡表單

## 🛠️ 技術棧

- **框架**：[Next.js 15.3.1](https://nextjs.org/)
- **語言**：[TypeScript 5.8.3](https://www.typescriptlang.org/)
- **樣式**：
  - [Tailwind CSS 4.1.3](https://tailwindcss.com/)
  - [Material-UI 7.0.2](https://mui.com/)
- **狀態管理**：[Redux 5.0.1](https://redux.js.org/)
- **表單**：[React Hook Form 7.62.0](https://react-hook-form.com/)
- **路由**：[React Router DOM 7.5.0](https://reactrouter.com/)

## 📋 環境要求

- **Node.js**：版本 20.0.0 或更高 ([下載](https://nodejs.org/en/download/))
- **Yarn**：套件管理器 (建議使用)

## 🚀 快速入門

### 1. 複製儲存庫

```bash
git clone git@github.com:sunpochin/cogniscient.git
cd cogniscient
```

### 2. 安裝依賴

```bash
yarn install
```

### 3. 啟動開發伺服器

```bash
yarn dev
```

### 4. 開啟您的瀏覽器

訪問 [http://localhost:3000](http://localhost:3000) 查看應用程式。

## 📁 專案結構

```
src/
├── app/                    # Next.js App Router 頁面
│   ├── articles/          # 文章區塊
│   ├── members/           # 團隊成員區塊
│   ├── layout.tsx         # 根佈局 (Root Layout)
│   └── page.tsx           # 首頁 (Homepage)
├── components/            # 可重複使用的 React 元件
│   ├── AboutCogniscient.tsx # 「關於 Cogniscient」元件
│   ├── ContactForm.tsx    # 聯絡表單元件
│   ├── GameOfLifeLogo.tsx # 生命遊戲 Logo 動畫元件
│   ├── Navbar.tsx         # 導覽列元件
│   ├── SideDecoration.tsx # 側邊裝飾元件
│   └── ...
├── pages/api/             # API 路由 (Next.js API Routes)
├── stores/                # Redux store 狀態管理設定
└── globals.css            # 全域 CSS 樣式
```

## 🧪 可用腳本

```bash
# 開發
yarn dev          # 啟動開發伺服器
yarn build        # 建置生產版本
yarn start        # 啟動生產伺服器
yarn lint         # 執行 ESLint 檢查
```

## 🚀 部署

### Vercel

1.  將您的程式碼推送到 GitHub
2.  將您的儲存庫連接到 [Vercel](https://vercel.com)
3.  每次推送到 `main` 分支時自動部署

### 手動建置

```bash
yarn build
yarn start
```

## 🎨 設計系統

- **顏色**：以 AI/科技為主題的自訂調色盤
- **字體**：使用 Montserrat 字體家族，打造現代、簡潔的外觀
- **元件**：結合 Material-UI 元件和 Tailwind 的功能類
- **響應式**：採用行動優先的方法，並設定斷點

## 📄 授權

本專案採用 MIT 授權 - 詳情請見 [LICENSE](LICENSE) 檔案。

## 📞 聯絡方式

若有關於本專案或 Cogniscient 服務的問題：

- 網站：[[https://cogniscient.vercel.app/](https://cogniscient.vercel.app/)]
- 電子郵件：[sunpochin@gmail.com]
- LinkedIn：[[LinkedIn Profile](https://www.linkedin.com/in/sunpochin/)]

---

以 ❤️ 使用 Next.js 和現代網頁技術建置。
