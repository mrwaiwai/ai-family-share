# AI 親子學堂

AI 親子學堂是一個以 React、TypeScript 與 Vite 建置的靜態前端網站，整理 AI 基礎知識、提示詞技巧、互動練習、測驗與家長指南，協助家長陪伴孩子一起安全地學習與使用 AI。

## 功能特色

- AI 知識頁面，介紹常見 AI 概念與工具類型
- 提示詞技巧頁面，整理實用框架與範例
- 互動式提示詞練習，提供即時回饋
- AI 知識測驗，通過後可下載電子證書
- 家長指南，協助親子情境中的風險辨識與陪伴策略

## 技術棧

- React 18
- TypeScript
- Vite 5
- React Router
- Tailwind CSS
- Radix UI / shadcn-ui 元件
- Vitest + Testing Library

## 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

預設會在 [http://localhost:8080](http://localhost:8080) 啟動。

### 其他指令

```bash
npm run build
npm run preview
npm run test -- --run
npm run lint
```

## 部署

專案已配置為可部署到 GitHub Pages。

1. 將程式推送到 GitHub repository 的預設分支。
2. 到 GitHub 的 `Settings > Pages`。
3. 在 `Build and deployment` 選擇 `GitHub Actions`。
4. 之後每次 push 到 `main`，GitHub 都會自動建置並部署網站。

部署 workflow 會自動處理：

- Vite 的 repository base path
- SPA 路由所需的 `404.html`
- `dist/` 靜態資產上傳與發佈

## 專案結構

```text
src/
  components/   可重用元件與版面
  data/         測驗與內容資料
  pages/        各主要頁面
  lib/          共用工具函式
  test/         測試設定與範例
```

## 維護說明

- 路由已使用 lazy loading，降低初始載入體積
- 證書下載功能會在使用時才動態載入 `html2canvas`
- 專案已整理為純 Vite + React 前端結構
