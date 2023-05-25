/*
 * :file description: 会员列表
 * :name: /m-xiaozhicloud/app/model/member.js
 * :author: 张德志
 * :copyright: (c) 2023, Xiaozhi
 * :date created: 2023-04-28 12:25:00
 * :last editor: 张德志
 * :date last edited: 2023-05-25 12:31:24
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const MemberSchema = Schema({
    username: { type: String },
    password: { type: String },
    phone: { type: String },
    email: { type: String },
    sex: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 1,
    },
    update_time: {
      type: Number,
    },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Member', MemberSchema, 'member');
};
