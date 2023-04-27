/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/advert.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-19 09:01:10
 * :last editor: 张德志
 * :date last edited: 2023-04-27 13:40:37
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const BannerSchema = Schema({
    title: { type: String }, // 图片名称
    link: { type: String }, // 图片链接
    url: { type: String }, // 图片链接
    status: { type: String }, // 排序
    position: { type: String }, 
    update_time: {
      type: Number,
    },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Advert', BannerSchema, 'advert');
};
