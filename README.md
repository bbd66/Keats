# Deng Bowen · 3D Research Resume

这是一个基于 React、TypeScript、Three.js 和 React Three Fiber 的 3D 个人简历网站。

页面内容围绕数字人动作生成、具身智能、机器人控制和大模型优化展开：

- 首屏：Deng Bowen / 邓博文
- 教育经历：SCUT、TUM、Westlake University · Endless Lab
- 研究项目：Streaming Co-Dance、FitGen、TinyDog、ROBOCON、Nemotron、AI Agent Security
- 项目与成果：机器人竞赛、Kaggle 和模型优化相关成果

## 本地运行

```bash
npm ci
npm run dev
```

构建检查：

```bash
npm run build
```

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。

## 目录说明

- `src/scene/`：3D 场景、人物、相机和滚动交互
- `src/ui/`：首屏、教育经历和项目成果内容
- `src/data/`：教育节点、项目和 `focus-*` 对焦点配置
- `public/models/me.glb`：当前使用的占位人物模型

当前人物模型仍是原型占位模型，后续可以替换为自己的 GLB，并保留 `focus-*` 节点和独立 `eye_L` / `eye_R` 网格以启用眼神跟随。
