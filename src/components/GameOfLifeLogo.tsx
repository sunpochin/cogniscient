'use client'

import { useEffect, useRef } from 'react'

/**
 * GameOfLifeLogo 組件的 Props 介面
 */
interface GameOfLifeLogoProps {
  /** 網格大小（像素），預設 128 */
  size?: number
  /** 是否顯示文字內容，預設 true */
  showText?: boolean
  /** 自訂 CSS 類別 */
  className?: string
  /** 是否使用緊湊模式（適合較小空間），預設 false */
  compact?: boolean
}

/**
 * Cogniscient 動態 Logo 組件
 * 基於 Conway's Game of Life 算法實現的互動式 Logo
 * 週期性顯示公司 Logo 圖案，並穿插各種生命遊戲圖案
 */
const GameOfLifeLogo: React.FC<GameOfLifeLogoProps> = ({ 
  size = 128, 
  showText = true, 
  className = '',
  compact = false
}) => {
  const gridRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gameInstanceRef = useRef<any>(null)

  useEffect(() => {
    /**
     * Game of Life 核心邏輯類別
     * 實現 Conway's 生命遊戲規則和自訂圖案
     */
    class GameOfLife {
      private width: number          // 網格寬度
      private height: number         // 網格高度
      private grid: boolean[][]      // 當前生命狀態網格
      private previousGrid: boolean[][] // 前一世代的生命狀態
      private generation: number     // 當前世代數
      private maxGenerations: number // 每個循環的最大世代數
      private cycleCount: number     // 循環計數器
      private logoDisplayTime: number // Logo 顯示剩餘時間
      private showingLogo: boolean   // 是否正在顯示 Logo
      private container: HTMLDivElement // DOM 容器元素
      private intervalId: NodeJS.Timeout | null = null // 動畫計時器 ID

      constructor(width: number, height: number, container: HTMLDivElement) {
        this.width = width
        this.height = height
        this.grid = []
        this.previousGrid = []
        this.generation = 0
        this.maxGenerations = 15
        this.cycleCount = 0
        this.logoDisplayTime = 0
        this.showingLogo = false
        this.container = container

        this.initializeGrid()
        this.setupPattern()
        this.createDOM()
        this.start()
      }

      /**
       * 初始化生命網格
       * 建立兩個 17x17 的布林網格，用於存儲當前和前一世代的細胞狀態
       */
      initializeGrid() {
        this.grid = Array(this.height).fill(null).map(() => Array(this.width).fill(false))
        this.previousGrid = Array(this.height).fill(null).map(() => Array(this.width).fill(false))
      }

      /**
       * 取得 Cogniscient Logo 的細胞圖案
       * 這些座標定義了 Logo 在 13x13 網格中的形狀
       * @returns Logo 圖案的座標陣列
       */
      getLogoPattern() {
        return [
          [0,4], [0,5],
          [1,3], [1,4], [1,5], [1,6],
          [2,2], [2,4], [2,5], [2,7], [2,8], [2,10],
          [3,7], [3,8], [3,11],
          [4,2], [4,3], [4,6], [4,7], [4,10], [4,11], [4,12],
          [5,2], [5,3], [5,4], [5,5], [5,7], [5,10], [5,11], [5,12],
          [6,1], [6,4], [6,8], [6,11],
          [7,0], [7,1], [7,2], [7,5], [7,7], [7,8], [7,9], [7,10],
          [8,0], [8,1], [8,2], [8,5], [8,6], [8,9], [8,10],
          [9,1], [9,4], [9,5],
          [10,2], [10,4], [10,5], [10,7], [10,8], [10,10],
          [11,6], [11,7], [11,8], [11,9],
          [12,7], [12,8]
        ]
      }

      /**
       * 設定當前循環的圖案
       * 根據循環計數決定顯示 Logo、隨機湯或 Glider 圖案
       */
      setupPattern() {
        this.initializeGrid()
        
        // 每三個循環顯示一次 Logo
        if (this.cycleCount % 3 === 0) {
          this.showingLogo = true
          this.logoDisplayTime = 20 // Logo 顯示持續時間
          const logoPattern = this.getLogoPattern()
          
          // 將 13x13 Logo 置中於 17x17 網格
          const offsetX = 2
          const offsetY = 2
          
          logoPattern.forEach(([row, col]) => {
            const newRow = row + offsetY
            const newCol = col + offsetX
            if (newRow < this.height && newCol < this.width) {
              this.grid[newRow][newCol] = true
            }
          })
        } else if (this.cycleCount % 5 === 0) {
          // 每五個循環創建隨機湯
          this.createRandomSoup()
        } else {
          // 其他循環使用預設的 Glider 圖案
          const patterns = [
            // 四角落的 Glider 圖案
            [[1,2], [2,3], [3,1], [3,2], [3,3], [1,12], [2,11], [3,11], [3,12], [3,13], [12,1], [12,2], [12,3], [13,3], [14,2], [12,12], [13,11], [14,11], [14,12], [14,13]],
            // 分散的 Glider 圖案
            [[2,3], [3,4], [4,2], [4,3], [4,4], [3,8], [4,7], [5,7], [5,8], [5,9], [8,2], [9,3], [10,1], [10,2], [10,3], [9,11], [10,10], [11,10], [11,11], [11,12]],
            // 鑽石形排列的 Glider
            [[2,7], [2,8], [2,9], [3,9], [4,8], [7,2], [8,3], [9,1], [9,2], [9,3], [7,12], [8,11], [9,11], [9,12], [9,13], [12,7], [13,7], [13,8], [14,6], [15,7]],
            // 交叉路徑的 Glider
            [[1,1], [2,2], [3,0], [3,1], [3,2], [1,13], [2,12], [3,12], [3,13], [3,14], [13,1], [14,2], [15,0], [15,1], [15,2], [13,13], [14,12], [15,12], [15,13], [15,14]],
            // T 型排列的 Glider
            [[3,3], [4,4], [5,2], [5,3], [5,4], [3,11], [4,10], [5,10], [5,11], [5,12], [9,7], [9,8], [9,9], [10,9], [11,8], [13,7], [14,6], [15,6], [15,7], [15,8]],
            // 正方形排列的 Glider
            [[4,4], [5,5], [6,3], [6,4], [6,5], [4,10], [5,9], [6,9], [6,10], [6,11], [10,4], [11,5], [12,3], [12,4], [12,5], [10,10], [11,9], [12,9], [12,10], [12,11]],
            // 隨機分散的 Glider
            [[2,5], [3,6], [4,4], [4,5], [4,6], [6,1], [7,2], [8,0], [8,1], [8,2], [5,13], [6,12], [7,12], [7,13], [7,14], [11,8], [12,8], [12,9], [13,7], [14,8]],
            // 對撞軌道的 Glider
            [[1,7], [2,8], [3,6], [3,7], [3,8], [7,1], [8,2], [9,0], [9,1], [9,2], [7,14], [8,13], [9,13], [9,14], [9,15], [14,7], [15,6], [16,6], [16,7], [16,8]],
            // X 型圖案的 Glider
            [[3,2], [4,3], [5,1], [5,2], [5,3], [3,12], [4,11], [5,11], [5,12], [5,13], [11,2], [12,3], [13,1], [13,2], [13,3], [11,12], [12,11], [13,11], [13,12], [13,13]]
          ]
          const pattern = patterns[Math.floor(Math.random() * patterns.length)]
          
          pattern.forEach(([row, col]) => {
            if (row < this.height && col < this.width) {
              this.grid[row][col] = true
            }
          })
        }
      }
       
      /**
       * 創建隨機細胞湯
       * 隨機設置約 35% 的細胞為存活狀態，產生有趣的演化圖案
       */
      createRandomSoup() {
        for (let row = 0; row < this.height; row++) {
          for (let col = 0; col < this.width; col++) {
            this.grid[row][col] = Math.random() < 0.35
          }
        }
      }
      
      /**
       * 創建 DOM 元素
       * 為每個細胞建立對應的 HTML div 元素
       */
      createDOM() {
        this.container.innerHTML = ''
        
        for (let row = 0; row < this.height; row++) {
          for (let col = 0; col < this.width; col++) {
            const cell = document.createElement('div')
            cell.className = 'gol-cell'
            cell.id = `cell-${row}-${col}`
            this.container.appendChild(cell)
          }
        }
      }
      
      /**
       * 計算指定細胞的鄰居數量
       * 遵循 Conway's Game of Life 的 8-鄰居規則
       * @param row 細胞的行位置
       * @param col 細胞的列位置
       * @returns 存活鄰居的數量
       */
      countNeighbors(row: number, col: number) {
        let count = 0
        // 檢查周圍 3x3 範圍內的細胞（除了自己）
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue // 跳過自己
            
            const newRow = row + i
            const newCol = col + j
            
            // 確保座標在邊界內
            if (newRow >= 0 && newRow < this.height && 
                newCol >= 0 && newCol < this.width) {
              if (this.previousGrid[newRow][newCol]) count++
            }
          }
        }
        return count
      }
      
      /**
       * 計算下一世代
       * 實現 Conway's Game of Life 的核心規則：
       * 1. 存活細胞有 2-3 個鄰居時繼續存活
       * 2. 死亡細胞有恰好 3 個鄰居時復活
       * 3. 其他情況下細胞死亡
       */
      nextGeneration() {
        // 保存當前狀態到前一世代
        for (let row = 0; row < this.height; row++) {
          for (let col = 0; col < this.width; col++) {
            this.previousGrid[row][col] = this.grid[row][col]
          }
        }
        
        // Logo 顯示倒數計時
        if (this.showingLogo) {
          this.logoDisplayTime--
          if (this.logoDisplayTime <= 0) {
            this.showingLogo = false
          }
        }
        
        // 根據 Game of Life 規則更新每個細胞
        for (let row = 0; row < this.height; row++) {
          for (let col = 0; col < this.width; col++) {
            const neighbors = this.countNeighbors(row, col)
            const isAlive = this.previousGrid[row][col]
            
            if (isAlive) {
              // 存活細胞：2-3 個鄰居時存活，否則死亡
              this.grid[row][col] = neighbors === 2 || neighbors === 3
            } else {
              // 死亡細胞：恰好 3 個鄰居時復活
              this.grid[row][col] = neighbors === 3
            }
          }
        }
        
        this.generation++
      }
      
      /**
       * 渲染當前狀態到 DOM
       * 更新每個細胞的視覺狀態，包含出生、死亡動畫效果
       */
      render() {
        for (let row = 0; row < this.height; row++) {
          for (let col = 0; col < this.width; col++) {
            const cell = document.getElementById(`cell-${row}-${col}`)
            if (!cell) continue
            
            const wasAlive = this.previousGrid[row][col]
            const isAlive = this.grid[row][col]
            
            // 清除所有狀態類別
            cell.classList.remove('alive', 'dying', 'born', 'logo')
            
            if (this.showingLogo && isAlive) {
              // Logo 顯示期間的特殊樣式
              cell.classList.add('logo')
            } else if (isAlive && !wasAlive) {
              // 新出生的細胞
              cell.classList.add('born')
            } else if (!isAlive && wasAlive) {
              // 正在死亡的細胞
              cell.classList.add('dying')
            } else if (isAlive) {
              // 存活的細胞
              cell.classList.add('alive')
            }
          }
        }
      }
      
      /**
       * 檢查網格是否為空
       * @returns 如果沒有存活細胞則返回 true
       */
      isEmpty() {
        for (let row = 0; row < this.height; row++) {
          for (let col = 0; col < this.width; col++) {
            if (this.grid[row][col]) return false
          }
        }
        return true
      }
      
      /**
       * 開始生命遊戲動畫循環
       * 每 250ms 執行一次世代更新
       */
      start() {
        this.render()
        
        const step = () => {
          this.nextGeneration()
          this.render()
          
          // 達到最大世代數或網格為空時重新開始
          if (this.generation >= this.maxGenerations || this.isEmpty()) {
            setTimeout(() => {
              this.generation = 0
              this.cycleCount++
              this.setupPattern()
            }, 100)
          }
          
          this.intervalId = setTimeout(step, 250)
        }
        
        // 初始延遲後開始動畫
        setTimeout(step, 80)
      }

      /**
       * 清理資源
       * 停止動畫循環，清除計時器
       */
      cleanup() {
        if (this.intervalId) {
          clearTimeout(this.intervalId)
          this.intervalId = null
        }
      }
    }

    if (gridRef.current && !gameInstanceRef.current) {
      gameInstanceRef.current = new GameOfLife(17, 17, gridRef.current)
    }

    return () => {
      if (gameInstanceRef.current) {
        gameInstanceRef.current.cleanup()
        gameInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className={`game-of-life-logo ${className}`}>
      <style jsx>{`
        .game-of-life-logo {
          background: white;
          border-radius: ${compact ? '12px' : '20px'};
          padding: ${compact ? '20px' : '40px'};
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          display: inline-flex;
          align-items: center;
          gap: ${compact ? '15px' : '30px'};
          transition: transform 0.3s ease;
          max-width: fit-content;
        }

        .game-of-life-logo:hover {
          transform: translateY(-5px);
        }

        .game-grid {
          width: ${size}px;
          height: ${size}px;
          display: grid;
          grid-template-columns: repeat(17, 1fr);
          grid-template-rows: repeat(17, 1fr);
          gap: 1px;
          flex-shrink: 0;
        }

        .game-grid :global(.gol-cell) {
          background: transparent;
          border-radius: 1px;
          transition: all 0.3s ease;
        }

        .game-grid :global(.gol-cell.alive) {
          background: #3b82f6;
          box-shadow: 0 0 3px rgba(59, 130, 246, 0.4);
        }

        .game-grid :global(.gol-cell.dying) {
          background: #06b6d4;
          animation: fade-out 0.3s ease;
        }

        .game-grid :global(.gol-cell.born) {
          background: #3b82f6;
          animation: fade-in 0.3s ease;
        }

        .game-grid :global(.gol-cell.logo) {
          background: #1e293b;
          box-shadow: 0 0 4px rgba(30, 41, 59, 0.6);
        }

        .text-content {
          display: ${showText ? 'block' : 'none'};
        }

        .logo-text {
          font-size: ${compact ? '24px' : '32px'};
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #06b6d4 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .tagline {
          font-size: ${compact ? '12px' : '14px'};
          color: #64748b;
          margin: 0;
          margin-top: 5px;
          font-weight: 500;
        }

        @keyframes fade-in {
          from { 
            background: transparent;
            transform: scale(0.8);
          }
          to { 
            background: #3b82f6;
            transform: scale(1);
          }
        }

        @keyframes fade-out {
          from { 
            background: #3b82f6;
            transform: scale(1);
          }
          to { 
            background: transparent;
            transform: scale(0.8);
          }
        }
      `}</style>
      
      <div className="game-grid" ref={gridRef}></div>
      
      {showText && (
        <div className="text-content">
          <div className="logo-text">Cogniscient</div>
          <div className="tagline">Cognitive AI • UX Consulting</div>
        </div>
      )}
    </div>
  )
}

export default GameOfLifeLogo