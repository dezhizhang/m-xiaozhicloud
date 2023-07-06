/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/friendlyLink.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:21:28
 * :last editor: 张德志
 * :date last edited: 2023-07-07 07:46:48
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();

  const FriendlyLinkSchema = Schema({
    name: { type: String }, // 标题
    url: { type: String }, // 图片地址
    link: { type: String }, // 边接
    description: { type: String },
    view: { type: Number, default: 1 },
    review: { type: Number, default: 1 },
    status: { type: String, default: 'enable' }, // 状态
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('FriendlyLink', FriendlyLinkSchema, 'friendlyLink');
};
