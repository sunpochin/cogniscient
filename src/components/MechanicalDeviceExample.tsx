import MechanicalDevice from './MechanicalDevice'

export default function MechanicalDeviceExample() {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center">機械裝置組件使用範例</h1>

      {/* 大型展示 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">大型展示 (400px)</h2>
        <MechanicalDevice size={400} />
      </section>

      {/* 中型展示 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">中型展示 (預設 320px)</h2>
        <MechanicalDevice />
      </section>

      {/* 小型展示 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">小型展示 (200px)</h2>
        <MechanicalDevice size={200} />
      </section>

      {/* 並排展示 */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">並排展示</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <MechanicalDevice size={150} />
          <MechanicalDevice size={150} />
          <MechanicalDevice size={150} />
        </div>
      </section>

      {/* 自定義樣式 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">自定義樣式 (藍色主題)</h2>
        <MechanicalDevice
          size={300}
          className="text-blue-500 bg-blue-50 rounded-full p-4"
        />
      </section>

      {/* 在卡片中使用 */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">在卡片中使用</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium mb-4">粒子加速器控制系統</h3>
            <MechanicalDevice size={200} className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300">
              專為高能物理實驗設計的人機界面系統
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium mb-4">醫療設備監控</h3>
            <MechanicalDevice size={200} className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300">
              複雜醫療設備的直觀操作界面設計
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
