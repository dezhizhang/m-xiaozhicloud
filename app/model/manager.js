/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:21:28
 * :last editor: 张德志
 * :date last edited: 2023-09-28 18:02:42
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const ManagerSchema = Schema({
    username: { type: String },
    password: { type: String },
    phone: { type: String },
    email: { type: String },
    avatar: { type: String },
    address: { type: String },
    gender: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 1,
    },
    // 是否是超级管理员
    is_admin: {
      type: Number,
      default: 0,
    },
    update_time: {
      type: Number,
    },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Manager', ManagerSchema, 'manager');
};
