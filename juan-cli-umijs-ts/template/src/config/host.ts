/**
 * @author: 冯伟
 * @description:host 配置
 */

import { isDevNoMock, isPrd, isPrdDev } from '../utils/env';

// API host
let APIHost = ''; // 默认为本地运行 mock
if (isDevNoMock) APIHost = 'http://localhost:7001'; // 本地，不用 mock
if (isPrdDev) APIHost = 'http://111.11.11.1112:8084'; // 测试机
if (isPrd) APIHost = ''; // 线上环境，用当前域名即可

export { APIHost };
