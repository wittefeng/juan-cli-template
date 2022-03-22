/**
 * @author: 冯伟
 * @description:
 */
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  publicPath: '/',
  hash: true,
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},

  // 定义全局变量
  define: {
    'process.env.ENV': 'dev',
  },

  locale: {},
});
