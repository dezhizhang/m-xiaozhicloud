/*
 * :file description: 
 * :name: /m-xiaozhicloud/config/plugin.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2023-04-28 00:42:07
 */
'use strict';

// 配置数据库
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.cors = {
  enable:true,
  package:'egg-cors'
}
