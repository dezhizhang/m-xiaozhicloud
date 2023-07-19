/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/office.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:21:28
 * :last editor: 张德志
 * :date last edited: 2023-07-19 07:43:27
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const OfficeSchema = Schema({
    title: { type: String }, // 标题
    url: { type: String }, // 图片地址
    link: { type: String }, // 边接
    type: { type: String }, // 类型
    download: { type: String }, // 文件下载
    style: { type: String }, // 风格
    applicable: { type: String }, // 应用
    description: { type: String },
    view: { type: Number, default: 1 },
    review: { type: Number, default: 1 },
    status: { type: String, default: 'enable' }, // 状态
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Office', OfficeSchema, 'office');
};
