# Hi there 👋 我是 Tommy(黃彥銘)

全端工程師,住台北木柵,政大國發所畢業。平常在 Next.js 生態系裡打滾,沒事也喜歡自己找題目來做——電商、遊戲化互動、即時搶座系統都碰過,最近開始玩 AWS,順便把自己的部落格養起來。

---

## 💼 工作經驗

### **資深軟體工程師 | 康軒文教**
*2026/6 - Present*

負責雲端教學平台後端系統(Node.js/Express)的維運與基礎設施優化。主導機器遷移專案,重新規劃 nginx reverse proxy 與部署架構;排查並修復一項延續數月的風險——正式環境與測試環境的部署目錄透過歷史遺留的 symlink 共用同一份檔案,導致互相覆蓋部署結果,重建為完全獨立的部署路徑並驗證修復。另從零導入自動化資料庫 migration 機制(sequelize-cli),取代純手動 SQL 執行流程,並整合進 CI/CD 部署流程;同時為正式環境建立即時 process 監控與異常示警機制。

### **Web 前端負責人 | Viberse**
*2024/2 - 2026/3*

從零把官網、廣告後台、CMS、部落格這些模組生出來,把 Next.js + Zustand 的資料流跟渲染邏輯抓好,頁面明顯變快(平均縮短 30% 左右);金流串了 RevenueCat,順便玩玩 GSAP 做限時動態跟 Bingo/Tango 小遊戲,想辦法讓大家多留一下。

---

## 🚀 做過的專案

### **🛒 COME.ANC13 代購網站**
*連結:[anc-13.com](https://anc-13.com)*

自己一個人從頭做的代購電商,購物流程跟後台都包了。整合 Algolia 做即時搜尋、串綠界處理金流跟四大超商電子地圖,還花了不少時間把 3D 驗證在正式環境的跳轉問題抓出來。圖片上傳走 Cloudflare R2,登入用 NextAuth.js 接 Google/LINE。

🛠 比較值得一提的細節:
- Algolia 全文檢索 + 異步 Webhook,確保資料庫跟搜尋索引不會對不上
- 綠界 3D 驗證在正式環境的跳轉衝突,查了好一陣子才抓到根因
- Redis 快取高頻資料(像 Banner),後台改一次資料就自動清快取
- Cloudflare R2 + Presigned URL 做安全的檔案上傳

### **🏝️ Focus Island 專注島**
*連結:[focus-island.huangyanming.com](https://focus-island.huangyanming.com/)*

一個「搶座位 + 專注計時」的小網站,想解決「大家說好要一起讀書結果各自散掉」這件事。用 Vue 3 + Golang 做即時搶座,高併發選位靠 Redis Lua Script 處理,不用傳統先讀後寫,人多的時候座位狀態也不會亂掉。

🛠 比較值得一提的細節:
- Web Worker 獨立計時,分頁切到背景瀏覽器降頻也不會慢半拍
- Gorilla WebSocket 做房間制廣播,連線生命週期自己管
- PWA 支援離線使用,專注結束會跳系統通知
- 前端部署在 Vercel,後端 Docker 化丟到 Kobey,健康檢查跟監控都有顧到

### **🔍 PTT MacShop 關鍵字監控與通知系統**
*連結:[部落格文章](https://www.huangyanming.com/blog/aws-ptt-macshop-bot-blocked-by-ip)*

想補強 AWS 經驗生出來的練習專案,監控 PTT MacShop 版(二手蘋果產品交易),使用者訂閱關鍵字,新文章符合就發 Discord 通知,網頁跟 Discord 指令都能管理訂閱。整套用 Lambda / API Gateway / DynamoDB 搭起來,做到一半發現 PTT 直接把整個 AWS 網段擋掉,只好把爬蟲搬到自己的電腦上跑,AWS 那邊維持不動。

🛠 比較值得一提的細節:
- 每個 Lambda 都設計自己的最小權限 IAM role,不共用
- 前端用 Next.js 16 + Discord OAuth2,API 金鑰全部留在伺服器端,瀏覽器完全看不到
- 寫了資料匯出工具,確保哪天想換掉 DynamoDB 也不會被綁死

> 這個專案架構設計跟排查問題都是自己來,開發過程有搭配 AI 編碼工具(Claude Code)加速實作。

### 🌙 更多 side project

再往下是最近生的幾個比較小、比較好玩的東西,細節不全部塞在這裡,收在 [/works](https://www.huangyanming.com/works) 完整清單裡。這段以下由 GitHub Action 每天自動從 [huangyanming.com/api/works](https://www.huangyanming.com/api/works) 同步,不要手動改:

<!-- WORKS:START -->
- **[食物挑選器](https://food-chosing.huangyanming.com/)**——用定位抓取附近餐廳,依菜系、評分、價位、是否營業中等條件篩選,幫你決定今天吃什麼。
- **[hey-console](https://www.npmjs.com/package/hey-console)**——一個發布到 npm 的極簡套件:在網站 devtools console 印出客製化的歡迎 banner 彩蛋,內建預設值也能自帶設定。
- **[moon-bbq 中秋線上烤肉賞月](https://moon-bbq.huangyanming.com/)**——中秋節限定的多人即時互動網站,免帳號、免付費,挑一桌坐下就能跟同桌的人一起烤肉賞月,即時看到誰也在。
<!-- WORKS:END -->

---

## 🛠 技術棧

### **Frontend & Frameworks**
![](https://img.shields.io/badge/-Next.js_16-000000?style=for-the-badge&logo=Next.js)
![](https://img.shields.io/badge/-React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/-Zustand-8DD6F9?style=for-the-badge)
![](https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### **Backend & Middleware**
![](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![](https://img.shields.io/badge/-Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![](https://img.shields.io/badge/-WebSocket-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![](https://img.shields.io/badge/-Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![](https://img.shields.io/badge/-Algolia-003DFF?style=for-the-badge&logo=algolia&logoColor=white)
![](https://img.shields.io/badge/-Cloudflare_R2-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

### **AWS & Cloud**
![](https://img.shields.io/badge/-AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
![](https://img.shields.io/badge/-API_Gateway-FF9900?style=for-the-badge&logo=amazonapigateway&logoColor=white)
![](https://img.shields.io/badge/-DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb&logoColor=white)
![](https://img.shields.io/badge/-AWS_Amplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white)
![](https://img.shields.io/badge/-IAM-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![](https://img.shields.io/badge/-Discord_API-5865F2?style=for-the-badge&logo=discord&logoColor=white)

### **DevOps & Tools**
![](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![](https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![](https://img.shields.io/badge/-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![](https://img.shields.io/badge/-npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/-Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)

---

## ✨ 其他小事

- Scrum 節奏還算適應,Sprint 準時交付率大概抓在 95% 以上
- 比較擅長處理那種「架構本身就會出包」的問題:快取跟資料庫對不上、金流卡在奇怪的跳轉、併發下的資料一致性
- 從畫面上的動畫細節到後端架構、部署,大概都能自己扛

---

## 📫 找我

- **Email:** tommy8852024@gmail.com
- **看看我做的東西:** [huangyanming.com/works](https://www.huangyanming.com/works)(完整作品清單) | [anc-13.com](https://anc-13.com) | [focus-island.huangyanming.com](https://focus-island.huangyanming.com/) | [huangyanming.com](https://www.huangyanming.com)(部落格,技術筆記與心情點滴)
- **在:** 木柵,台北
