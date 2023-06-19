/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/intelligent.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:01:10
 * :last editor: 张德志
 * :date last edited: 2023-06-19 19:42:44
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const IntelligentSchema = Schema({
    title: { type: String }, // 图片名称
    link: { type: String }, // 图片链接
    url: { type: String }, // 图片链接
    status: { type: String }, // 排序
    type: { type: String }, // 类型
    position: { type: String },
    topClassify: { type: String }, // 一级分类
    secondaryClassify: { type: String }, // 二级分类
    updateTime: {
      type: Number,
    },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Intelligent', IntelligentSchema, 'intelligent');
};
