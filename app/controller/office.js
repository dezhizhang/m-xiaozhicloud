/*
 * :file description: 办公文档
 * :name: /m-xiaozhicloud/app/controller/office.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-25 17:16:08
 * :last editor: 张德志
 * :date last edited: 2023-05-25 12:28:49
 */
'use strict';

const { Controller } = require('egg');

class WebsiteController extends Controller {
  // 添加数据
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.office.create(body);
    ctx.helper.success({ ctx, res: '新增办公文档成功' });

  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.office.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: '编辑办公文档成功' });
  }

  // 获取所有网站列表
  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.office.list(body);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.office.destroy(body._id);
    ctx.helper.success({ ctx, res: '删除办公文档成功' });
  }
}

module.exports = WebsiteController;
