/**
 * @author: 冯伟
 * @description: 请输入文件描述
 */

import _ from 'lodash';
import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';
import { message } from 'antd';
import { getItem, setItem } from './localStorage';
import { TOKEN_KEY_LOCAL_STORAGE } from '@/config/constants';

// 防抖处理
const messageError = _.debounce(message.error, 500);

/**
 * 设置 jwt token 到 localStorage
 * @param token jwt token
 */
export function setAuthorizationToken(token: string): void {
  setItem(TOKEN_KEY_LOCAL_STORAGE, token);
}

/**
 * 统一的 http 请求
 * @param method
 * @param url
 * @param dataOrParams
 * @param headers
 * @returns
 */
async function http(
  method: Method = 'get',
  url: string = '',
  dataOrParams: object = {},
  headers: AxiosRequestHeaders = {},
): Promise<any> {
  if (!url) throw new Error('http url 为空');

  // 拼接 axios 配置
  const conf: AxiosRequestConfig = {
    method,
    url,
    headers,
  };

  if (method === 'get') conf.params = dataOrParams;
  else conf.data = dataOrParams;

  const token = getItem(TOKEN_KEY_LOCAL_STORAGE);
  if (token && conf.headers) {
    conf.headers.authorization = `${token}`;
  }

  // 发送请求
  const res = await axios(conf);
  if (res.status !== 200) {
    console.error(res);
    messageError('请求状态码错误');
  }

  // 处理结果
  const { data: resData } = res;
  if (resData.errno === 0) return resData.message || {};
  console.error('请求错误', resData.errno, resData.message);
  messageError(resData.message); // 弹出错误警告
  return null;
}

/**
 * get 请求
 * @param url url
 * @param params query对象
 */
export async function httpGet(
  url: string = '',
  params: object = {},
): Promise<any> {
  const data = await http('get', url, params);
  return data;
}

/**
 * post 请求
 * @param url url
 * @param body body对象
 */
export async function httpPost(
  url: string = '',
  body: object = {},
): Promise<any> {
  const data = await http('post', url, body);
  return data;
}

/**
 * patch 请求
 * @param url url
 * @param body body对象
 */
export async function httpPatch(
  url: string = '',
  body: object = {},
): Promise<any> {
  const data = await http('patch', url, body);
  return data;
}

/**
 * put 请求
 * @param url url
 * @param body body对象
 */
export async function httpPut(
  url: string = '',
  body: object = {},
): Promise<any> {
  const data = await http('put', url, body);
  return data;
}

/**
 * delete 请求
 * @param url url
 * @param body body对象
 */
export async function httpDelete(
  url: string = '',
  body: object = {},
): Promise<any> {
  const data = await http('delete', url, body);
  return data;
}
