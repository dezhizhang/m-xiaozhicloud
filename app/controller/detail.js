/*
 * :file description: 广告
 * :name: /m-xiaozhicloud/app/controller/detail.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2023-10-07 09:14:26
 */
'use strict';

const { Controller } = require('egg');

class DetailController extends Controller {
  // 添加数据
  async add() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    const res = await service.detail.info(body);
    if (res.data) {
      await service.detail.update(res?.data?._id, body);
      await ctx.helper.success(ctx, '详情更新成功');
      return;
    }
    await this.service.detail.create(body);
    await ctx.helper.success(ctx, '新增详情完成');
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.detail.update(body._id, body);
    await ctx.helper.success(ctx, '编辑详情成功');
  }

  // 获取所有网站列表
  async info() {
    const { ctx, service } = this;
    // 组装参数
    const query = ctx.request.query;
    // 调用 Service 进行业务处理
    const res = await service.detail.info(query);
    // 设置响应内容和响应状态码
    await ctx.helper.success(ctx, '获取数据成功', res);
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.advert.destroy(body._id);
    await ctx.helper.success(ctx, '删除详情成功');
  }
}

module.exports = DetailController;
