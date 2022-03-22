/**
 * @author: 冯伟
 * @description:
 */

export const ENV = process.env.ENV;
export const isPrd = ENV === 'production';
export const isPrdDev = ENV === 'prd_dev';
export const isDev = ENV === 'dev';
export const isDevNoMock = ENV === 'dev-no-mock';
export const isTest = ENV === 'test';
