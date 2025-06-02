import MechanicalDevice from './MechanicalDevice'

export default function MechanicalDeviceExample() {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center">
        Mechanical Device Component Usage Example
      </h1>

      {/* 大型展示 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">Large Display (400px)</h2>
        <MechanicalDevice size={400} />
      </section>

      {/* 中型展示 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">
          Medium Display (Default 320px)
        </h2>
        <MechanicalDevice />
      </section>

      {/* 小型展示 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">Small Display (200px)</h2>
        <MechanicalDevice size={200} />
      </section>

      {/* 並排展示 */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Side-by-Side Display
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <MechanicalDevice size={150} />
          <MechanicalDevice size={150} />
          <MechanicalDevice size={150} />
        </div>
      </section>

      {/* 自定義樣式 */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">
          Custom Style (Blue Theme)
        </h2>
        <MechanicalDevice
          size={300}
          className="text-blue-500 bg-blue-50 rounded-full p-4"
        />
      </section>

      {/* 在卡片中使用 */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">Use in Card</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium mb-4">
              Particle Accelerator Control System
            </h3>
            <MechanicalDevice size={200} className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300">
              Human-Machine Interface System Designed for High-Energy Physics
              Experiments
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium mb-4">
              Medical Equipment Monitoring
            </h3>
            <MechanicalDevice size={200} className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300">
              Design of Intuitive Operating Interface for Complex Medical
              Equipment
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
