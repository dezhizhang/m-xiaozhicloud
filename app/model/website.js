/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/website.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:21:28
 * :last editor: 张德志
 * :date last edited: 2023-07-03 23:02:34
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const WebsiteSchema = Schema({
    title: { type: String }, // 标题
    url: { type: String }, // 图片地址
    link: { type: String }, // 边接
    type: { type: String }, // 类型
    style: { type: String }, // 网站风格
    color: { type: String }, // 网站颜色
    industry: { type: String }, // 行业分类
    description: { type: String },
    view: { type: Number, default: 1 },
    review: { type: Number, default: 1 },
    status: { type: String, default: 'enable' }, // 状态
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Website', WebsiteSchema, 'website');
};
