/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:21:28
 * :last editor: 张德志
 * :date last edited: 2022-11-18 22:44:33
 */
"use strict";
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const DesignSchema = Schema({
    title: { type: String }, // 标题
    url: { type: String }, // 图片地址
    link: { type: String }, // 边接
    type: { type: String }, // 类型
    description: { type: String },
    view: { type: Number, default: 1 },
    review: { type: Number, default: 1 },
    status: { type: String, default: 'enable' }, // 状态
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model("Design", DesignSchema, "Design");
};
