/*
 * @Author: 冯伟
 * @description: 请输入文件描述
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'lodash';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
