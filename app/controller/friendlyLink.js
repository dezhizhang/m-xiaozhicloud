/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/friendlyLink.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-25 17:32:25
 * :last editor: 张德志
 * :date last edited: 2023-10-02 10:23:45
 */
'use strict';

const { Controller } = require('egg');

class FriendlyLinkController extends Controller {
  // 添加数据
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.friendlyLink.create(body);
    await ctx.helper.success(ctx, '新增友情链接成功');

  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.friendlyLink.update(body._id, body);
    await ctx.helper.success(ctx, '编辑友情链接成功');
  }

  // 获取所有网站列表
  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.friendlyLink.list(body);
    // 设置响应内容和响应状态码
    await ctx.helper.success(ctx, '获取友情链成功', res);
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.friendlyLink.destroy(body._id);
    await ctx.helper.success(ctx, '删除友情链接成功');
  }
}

module.exports = FriendlyLinkController;
