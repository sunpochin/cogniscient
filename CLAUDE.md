# Cogniscient 專案開發指引

這份文件包含 Cogniscient 專案特定的開發規範和最佳實踐。

## 📝 註解規範

### JSX 註解格式

在 React/Next.js 專案中，必須嚴格區分不同區域的註解格式：

#### ✅ 正確格式

**1. JSX 區域內（return 語句內）**
```jsx
const Component = () => {
  return (
    {/* JSX 內使用大括號包裹的多行註解 */}
    <div>
      {/* 單行 JSX 註解 */}
      <span>內容</span>
    </div>
  )
}
```

**2. JavaScript 區域（return 語句外）**
```jsx
// 單行註解使用雙斜線
const Component = () => {
  // 變數註解
  const data = []
  
  /* 
    多行註解使用斜線星號
    適用於複雜邏輯說明
  */
  const complexLogic = () => {
    // 函式內部註解
  }
  
  // 渲染函式
  return (
    {/* 進入 JSX 區域後使用大括號格式 */}
    <div>內容</div>
  )
}
```

#### ❌ 錯誤格式

```jsx
const Component = () => {
  return (
    // ❌ 錯誤：JSX 內不能使用雙斜線註解
    <div>
      /* ❌ 錯誤：JSX 內不能使用純斜線星號註解 */
      <span>內容</span>
    </div>
  )
}
```

### 註解內容原則

1. **使用繁體中文**：所有註解統一使用繁體中文
2. **說明功能和原因**：不只說明做什麼，更要說明為什麼
3. **技術細節註解**：重要的 CSS 類別、props、無障礙屬性都要註解
4. **響應式設計說明**：詳細說明各斷點的行為

#### 範例

```jsx
/**
 * 團隊成員頁面元件
 * 功能：展示公司團隊成員資訊
 * - 使用 Flexbox 實現響應式佈局
 * - 每個成員以卡片形式展示
 * - 支援點擊查看詳細資訊
 */
const MembersPage = () => {
  // 團隊成員資料陣列
  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Technology Officer", // 技術長
      imageUrl: "https://example.com/image.jpg" // 使用外部圖片服務
    }
  ]

  // 渲染頁面結構
  return (
    // 主要內容區域，使用語義化的 main 標籤
    <main className="bg-gray-50 min-h-screen">
      {/* 導覽列 */}
      <NavBar />
      
      {/* 
        成員卡片容器：使用 Flexbox 實現響應式佈局
        - flex flex-wrap: 允許換行的彈性佈局
        - justify-center: 內容居中對齊
        - gap-6: 統一的間距
      */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* 遍歷每個團隊成員 */}
        {members.map((member) => (
          /* 
            成員卡片：使用 article 標籤表示獨立的內容單元
            響應式寬度設定：
            - w-full: 手機版佔滿寬度
            - sm:w-80: 小螢幕 320px
            - md:w-72: 中等螢幕 288px
          */
          <article 
            key={member.id}
            className="bg-white rounded-lg shadow-md w-full sm:w-80 md:w-72"
          >
            <Image
              src={member.imageUrl}
              alt={`Portrait of ${member.name}`} // 無障礙友善的圖片描述
              fill // 填滿容器
              className="object-cover" // 保持比例裁切
            />
          </article>
        ))}
      </div>
    </main>
  )
}
```

## 🎨 樣式規範

### Tailwind CSS 使用原則

1. **統一背景色**：所有頁面使用 `bg-gray-50` 保持一致性
2. **響應式斷點**：
   - `sm:` (640px+) - 小螢幕
   - `md:` (768px+) - 平板
   - `lg:` (1024px+) - 桌面
   - `xl:` (1280px+) - 大桌面
3. **間距系統**：使用 Tailwind 預設間距，避免任意值

### 語義化 HTML

所有頁面必須使用語義化 HTML5 標籤：

- `<main>` - 頁面主要內容（每頁唯一）
- `<header>` - 頁首區域
- `<nav>` - 導覽區域  
- `<section>` - 內容區塊
- `<article>` - 獨立內容單元
- `<aside>` - 側邊欄內容

## 🔧 技術規範

### 元件命名

- **頁面元件**：使用 `PageName + Page` 格式（如 `MembersPage`）
- **功能元件**：使用 PascalCase（如 `NavBar`, `ContactForm`）
- **檔案命名**：與元件名稱一致

### 無障礙設計

1. **圖片 alt 屬性**：必須提供描述性替代文字
2. **aria-label**：為連結和按鈕提供詳細描述
3. **aria-hidden**：裝飾性圖標需隱藏於螢幕閱讀器
4. **語義化標籤**：正確使用 HTML5 語義標籤

## 📱 響應式設計

### 佈局選擇

- **Members 頁面**：使用 Flexbox（適合不固定數量的內容）
- **Articles 頁面**：使用 Grid（適合固定列數的卡片佈局）
- **主頁面**：使用 Section + 定位（複雜的設計佈局）

### 斷點策略

```jsx
// Flexbox 響應式寬度（適合可變數量內容）
className="w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 max-w-sm flex-shrink-0"

// Grid 響應式列數（適合固定數量內容）
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
```

## 🚀 效能優化

### Next.js Image 元件

```jsx
<Image
  src={imageUrl}
  alt="描述性文字"
  fill // 或明確的 width/height
  className="object-cover"
  sizes="25vw" // 告訴瀏覽器預期圖片大小
/>
```

### 程式碼分割

- 使用 Next.js App Router 自動程式碼分割
- 大型元件考慮使用 `dynamic` 動態載入

---

**最後更新**：請在修改此文件時更新日期和版本資訊。