/*
 * :file description: 广告
 * :name: /m-xiaozhicloud/app/controller/opensource.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2023-10-02 09:35:47
 */
'use strict';

const { Controller } = require('egg');

class OpensourceController extends Controller {
  // 添加数据
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.opensource.create(body);
    await ctx.helper.success(ctx, '新增开源成功');
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.opensource.update(body._id, body);
    await ctx.helper.success(ctx, '编辑开源成功');
  }

  // 获取所有网站列表
  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.opensource.list(body);
    // // 设置响应内容和响应状态码
    await ctx.helper.success(ctx, '获取数据成功', res);
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.opensource.destroy(body._id);
    await ctx.helper.success(ctx, '删除开源软件成功');
  }
}

module.exports = OpensourceController;
