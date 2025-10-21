# AI 加油打气语录生成器

一个基于 React + Tailwind CSS 开发的 AI 加油打气语录生成器应用。用户可以输入关键词，通过 AI 生成个性化的鼓励和激励话语。

## 功能特性

- 输入关键词生成个性化加油打气语录
- 展示主要语录和辅助鼓励话语
- 响应式设计，支持各种设备
- 美观的蓝色和紫色渐变风格界面

## 技术栈

- React 18
- Tailwind CSS 3
- Vite
- JavaScript

## 项目结构

```
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── App.css          # 自定义样式
│   ├── main.jsx         # 应用入口
│   └── index.css        # 基础样式和Tailwind导入
├── index.html           # HTML入口
├── package.json         # 项目依赖配置
├── vite.config.js       # Vite配置
├── tailwind.config.js   # Tailwind CSS配置
├── postcss.config.js    # PostCSS配置
└── .gitignore           # Git忽略规则
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 注意事项

- 当前版本使用模拟数据展示语录生成效果
- 实际使用时需要接入真实的AI API来实现语录生成功能

## License

MIT