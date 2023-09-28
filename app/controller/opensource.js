/*
 * :file description: 广告
 * :name: /m-xiaozhicloud/app/controller/opensource.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2023-09-26 07:43:56
 */
'use strict';

const { Controller } = require('egg');

class OpensourceController extends Controller {
  // 添加数据
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.opensource.create(body);
    ctx.helper.success({ ctx, res: '新增广告成功' });
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.opensource.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: '编辑网站成功' });
  }

  // 获取所有网站列表
  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.opensource.list(body);
    // // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.opensource.destroy(body._id);
    ctx.helper.success({ ctx, res: '删除网站成功' });
  }
}

module.exports = OpensourceController;