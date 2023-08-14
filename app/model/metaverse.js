
/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/intelligent.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:01:10
 * :last editor: 张德志
 * :date last edited: 2023-07-01 13:35:29
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const MetaverseSchema = Schema({
    title: { type: String }, // 图片名称
    link: { type: String }, // 图片链接
    url: { type: String }, // 图片链接
    status: { type: String }, // 排序
    type: { type: String }, // 类型
    description: { type: String },
    top_classify: { type: String }, // 一级分类
    secondary_classify: { type: String }, // 二级分类
    update_time: {
      type: Number,
    },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Metaverse', MetaverseSchema, 'metaverse');
};
