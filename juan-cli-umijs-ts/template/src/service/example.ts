/**
 * @author: 冯伟
 * @description: 示例
 */

import { httpGet } from '../utils/http';
import { APIHost } from '../config/host';

export async function example(): Promise<any> {
  const url = `${APIHost}/api/example`;
  const data = await httpGet(url);
  return data;
}
