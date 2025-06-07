import { defineConfig } from '@umijs/max';
import routes from './config/routes';

export default defineConfig({
  routes,
  alias: {
    '@': '/src',
  },
  npmClient: 'pnpm',
  // 禁用约定式路由，避免自动生成路由
  conventionRoutes: false,
  // 添加全局样式配置
  styles: [
    { src: 'src/global.less', global: true },
  ],
}); 
