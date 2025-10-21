import './App.css'
import { useState } from 'react'

// 添加摇摆动画的样式
const style = document.createElement('style');
style.textContent = `
  @keyframes wobble {
    0%, 100% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
    12.5% { transform: translateX(-50%) translateY(-50%) rotate(-5deg); }
    25% { transform: translateX(-50%) translateY(-50%) rotate(5deg); }
    37.5% { transform: translateX(-50%) translateY(-50%) rotate(-5deg); }
    50% { transform: translateX(-50%) translateY(-50%) rotate(5deg); }
    62.5% { transform: translateX(-50%) translateY(-50%) rotate(-5deg); }
    75% { transform: translateX(-50%) translateY(-50%) rotate(5deg); }
    87.5% { transform: translateX(-50%) translateY(-50%) rotate(-5deg); }
  }
  
  .animate-wobble {
    animation: wobble 1.2s ease-in-out forwards;
  }
`;
document.head.appendChild(style);

function App() {
  const [quote, setQuote] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isWobbling, setIsWobbling] = useState(false)

  // 简化的加油语录生成函数，确保模拟数据部分绝对可靠
  const generateMotivationalQuotes = async () => {
    setIsGenerating(true)
    setIsWobbling(true) // 触发摇摆动画
    
    try {
      // 直接使用模拟数据，确保功能稳定可靠
      console.log('使用模拟数据生成加油语录')
      
      // 添加短暂延迟，模拟API调用过程，同时为摇摆动画留出时间
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      // 丰富的模拟加油打气语录数据
      const mockQuotes = [
        '每一个坚持的时刻都在累积力量，你正在变得更加强大！相信自己，胜利就在前方等待着你。',
        '不要害怕困难，它们是你成长的垫脚石。保持积极的心态，你一定能够克服一切挑战。',
        '相信自己的能力，你拥有无限的潜能。每一次尝试都是宝贵的经验，不要轻易放弃。',
        '每一次的挫折都是成长的机会，每一次的努力都在接近成功。相信自己，你一定能行！',
        '无论遇到什么困难，都不要忘记你有多么强大。坚持下去，胜利一定属于你！',
        '你已经做得很好了，继续保持这份热情和动力！',
        '成功就在不远处，再坚持一下，你一定能够到达！',
        '每一步都在靠近目标，相信自己，你是最棒的！'
      ]
      
      // 随机选择一条语录
      const selectedQuote = mockQuotes[Math.floor(Math.random() * mockQuotes.length)]
      
      // 确保成功设置语录
      setQuote(selectedQuote)
      
      console.log('加油语录生成成功:', selectedQuote)
    } catch (error) {
      console.error('生成过程中出现异常:', error)
      
      // 最简单的备用语录，确保在任何情况下都能显示
      const fallbackQuote = '每一次努力都不会白费，坚持就是胜利！'
      
      setQuote(fallbackQuote)
      
      // 可以选择不显示错误提示，让用户专注于积极的内容
      // 但为了保持一致性，仍然保留提示
      alert('已为您生成加油语录！')
    } finally {
      setIsGenerating(false)
      // 等待摇摆动画完成后再重置状态
      setTimeout(() => setIsWobbling(false), 800)
    }
  }

  return (
    <div className="App max-w-4xl mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">AI 加油打气语录生成器</h1>
        <p className="text-gray-600 mt-2">点击按钮，让AI为您生成加油鼓励话语</p>
      </header>

      <main className="bg-white rounded-lg shadow-lg p-6">
        {/* 图片布局容器 */}
        <div className="relative w-full flex justify-center my-8">
          {/* pict2 作为背景图 */}
          <img 
            src="/pict2.png" 
            alt="背景图" 
            className="max-w-[200px] h-auto"
          />
          
          {/* pict3 效果图片，位于pict2的虚线中部 */}
          <img 
            src="/pict3.png" 
            alt="效果图" 
            className={`max-w-[100px] h-auto absolute left-1/2 bottom-[11%] transform -translate-x-1/2 -translate-y-1/2 max-w-[60%] h-auto transition-transform duration-300 ${
              isWobbling ? 'animate-wobble' : ''
            }`}
          />
          
          {/* 透明背景文字框，位于pict3上方，用于展示语录 */}
          {quote && (
            <div className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] text-center p-4 rounded-lg">
              <p className="text-sm text-black drop-shadow-sm transition-all duration-500 animate-fade-in">
                "{quote}"
              </p>
            </div>
          )}
          
          {/* pict1 点击按钮，置于pict2上方，位于下1/4处 */}
          <button
            onClick={generateMotivationalQuotes}
            disabled={isGenerating}
            className="absolute left-1/2 bottom-[10%] transform -translate-x-1/2 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-0 border-none"
            aria-label="为我加油"
          >
            
              <img 
                src="/pict1.png" 
                alt="为我加油按钮" 
                className="max-w-[120px] h-auto cursor-pointer"
              />
            
          </button>
        </div>


      </main>

      <footer className="text-center text-gray-500 text-sm mt-8">
        <p>© {new Date().getFullYear()} AI加油打气语录生成器 - 为您的生活增添动力</p>
      </footer>
    </div>
  )
}

export default App