export interface WorkListItem { name: string; meta?: string; tags?: string[]; link?: string; slug?: string }
export interface WorkGroup { heading: string; items: string[] }
export interface WorkSection { id: string; no: string; title: string; tagline: string; items?: WorkListItem[]; groups?: WorkGroup[]; awards?: string[]; footer?: string }
export interface WorksLang {
  title: string; closeLabel: string; openLabel: string; hint: string; awardsLabel: string; visitLabel: string
  detailPlaceholder: string; phImageLabel: string; phButtonLabel: string; countLabel: (n: number) => string; sections: WorkSection[]
}

export const SECTION_COVERS: Record<string, string> = {
  motion: '/works/covers/motion.jpg',
  robotics: '/works/covers/robotics.jpg',
  llm: '/works/covers/llm.jpg',
  awards: '/works/covers/awards.jpg',
}

const sections: WorkSection[] = [
  { id: 'motion', no: '01', title: 'Digital Human Motion', tagline: 'Co-Dance · FitGen', items: [
    { name: 'Streaming Co-Dance Generation', meta: 'Causal music + leader-conditioned follower motion', tags: ['CVPR 2027', 'Low Latency', 'Motion Generation'], slug: 'streaming-co-dance' },
    { name: 'FitGen', meta: 'Structured workout choreography generation', tags: ['HMR', '3D Reconstruction', 'Action Mining'], slug: 'fitgen' },
  ] },
  { id: 'robotics', no: '02', title: 'Embodied Robotics', tagline: 'TinyDog · ROBOCON', items: [
    { name: 'TinyDog Locomotion', meta: 'Omnidirectional quadruped control in Isaac Lab', tags: ['RL', 'RSL-RL', 'Simulation'], slug: 'tinydog' },
    { name: 'ROBOCON 2026', meta: 'LiDAR localization and autonomous robot systems', tags: ['ROS 2', 'Point-LIO', 'GLIM'], slug: 'robocon' },
  ] },
  { id: 'llm', no: '03', title: 'Model Optimization', tagline: 'Nemotron · Agent Security', items: [
    { name: 'Nemotron Reasoning', meta: 'Deterministic chain-of-thought SFT framework', tags: ['LoRA', 'MoE', 'Cut CE'], slug: 'nemotron' },
    { name: 'AI Agent Security', meta: 'Replayable multi-step tool attack chains', tags: ['Red Team', 'Tool Use', 'Search'], slug: 'agent-security' },
  ] },
  { id: 'awards', no: '04', title: 'Selected Results', tagline: 'Awards · Competitions', awards: ['ROBOCON · National First Prize', 'OpenAI Agent Security · Silver Medal', 'Nemotron · Private 40th', 'APMCM · Provincial Second Prize'], groups: [{ heading: 'Technical focus', items: ['Python · C/C++ · PyTorch · ROS 2 · Isaac Lab', 'Transformer · Diffusion · HMR · Reinforcement Learning'] }] },
]

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: { title: '项目经历与获奖', closeLabel: '返回', openLabel: '查看详情', hint: '继续下滑', awardsLabel: '获奖情况', visitLabel: '相关链接', detailPlaceholder: '项目详情将在下一版接入实时内容后台。', phImageLabel: '项目媒体', phButtonLabel: '项目链接', countLabel: (n) => `${n} 个项目`, sections },
  en: { title: 'Projects & Awards', closeLabel: 'Back', openLabel: 'Details', hint: 'Keep scrolling', awardsLabel: 'Awards', visitLabel: 'Links', detailPlaceholder: 'Project details will be connected to the live content backend in the next version.', phImageLabel: 'Project media', phButtonLabel: 'Project link', countLabel: (n) => `${n} projects`, sections },
}
