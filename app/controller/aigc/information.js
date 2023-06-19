/*
 * :file description: 广告
 * :name: /m-xiaozhicloud/app/controller/aigc/information.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2023-06-19 19:32:59
 */
'use strict';

const { Controller } = require('egg');

class InformationController extends Controller {

  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.information.create(body);
    ctx.helper.success({ ctx, res: '新增新闻成功' });
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.information.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: '编辑新闻成功' });
  }


  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.information.list(body);
    // // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.information.destroy(body._id);
    ctx.helper.success({ ctx, res: '删除新闻成功' });
  }
}

module.exports = InformationController;
