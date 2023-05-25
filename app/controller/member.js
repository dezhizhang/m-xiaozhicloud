/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/member.js
 * :author: 张德志
 * :copyright: (c) 2023, Xiaozhi
 * :date created: 2023-04-28 12:22:10
 * :last editor: 张德志
 * :date last edited: 2023-05-25 12:28:17
 */
'use strict';

const { Controller } = require('egg');

class MemberController extends Controller {
  // 获取管理员列表
  async register() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      msg: 'hello',
      success: true,
    };
    console.log('ctx');
  }
}

module.exports = MemberController;
