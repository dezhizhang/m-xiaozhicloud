/*
 * :file description:
 * :name: /m-xiaozhicloud/config/config.default.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2023-09-29 01:05:32
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667744376789_6134';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    // 关闭csrf
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // 配置线上地址
  config.cluster = {
    listen: {
      path: '',
      port: 8085,
      hostname: '0.0.0.0',
    },
  };
  // 配置数据库连接
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/xiaozhicloud',
      options: {},
    },
  };
  // 禁止csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // jwt
  config.jwt = { // token 密码
    secret: 'xiaozhicloud', // 可以自定义
    sign: {	// jwt.sign(***,***,[options,***])方法中，options的默认设置可以在这里配置；
      // 过期时间8小时
      expiresIn: 8 * (60 * 60), // 多少s后过期。actionToken.js中,jwt.sing(plyload,secret,{expiresIn:number})会被合并，调用时设置优先级更高;
    },
  };

  // reids
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: null,
      db: 0,
    },
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
