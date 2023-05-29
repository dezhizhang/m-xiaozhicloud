
/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/detail.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-10-31 13:02:28
 * :last editor: 张德志
 * :date last edited: 2023-05-26 20:34:56
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const DetailSchema = new Schema({
    detail_id: { type: String }, // 详情id
    content: { type: String }, // 下载的内容
    status: { type: Number, default: 1 }, // 当前的状态
    download: { type: Number, default: 1 }, // 下载的次数
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Detail', DetailSchema, 'detail');
};
