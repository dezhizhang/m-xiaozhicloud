/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/home.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-23 10:00:15
 * :last editor: 张德志
 * :date last edited: 2023-10-01 17:26:28
 */
'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '晓智云服务';
  }
}

module.exports = HomeController;
