/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/member.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-28 12:22:10
 * :last editor: 张德志
 * :date last edited: 2023-05-02 18:26:41
 */
/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:23:29
 * :last editor: 张德志
 * :date last edited: 2023-04-26 12:40:36
 */
"use strict";

const { Controller } = require("egg");

class MemberController extends Controller {
  // 获取管理员列表
  async register() {
    const { ctx } = this;
    this.ctx.body = {
      status:200,
      msg:'hello',
      success:true,
    }
    console.log("ctx");
  }
}

module.exports = MemberController;
