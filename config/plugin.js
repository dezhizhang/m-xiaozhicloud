/*
 * :file description:
 * :name: /m-xiaozhicloud/config/plugin.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2023-09-28 17:47:10
 */
'use strict';

// 配置数据库
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// 跨域请求
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// jwt-token
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

// redis
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

