
/*
 * :file description: 智能产品
 * :name: /m-xiaozhicloud/app/controller/aigc/intelligent.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2023-06-25 16:38:55
 */
'use strict';

const { Controller } = require('egg');

class IntelligentController extends Controller {

  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.intelligent.create(body);
    ctx.helper.success({ ctx, res: '新增人工智能产品成功' });
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.intelligent.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: '编辑人工智能产品成功' });
  }

  async info() {
    const ctx = this.ctx;
    const query = ctx.request.query;
    const res = await this.service.intelligent.info(query?.id);
    ctx.helper.success({ ctx, res, mes: '获取数据成功' });
  }

  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.intelligent.list(body);
    // // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.intelligent.destroy(body._id);
    ctx.helper.success({ ctx, res: '删除人工智能产品成功' });
  }
}

module.exports = IntelligentController;
