/*
 * :file description: 广告
 * :name: /m-xiaozhicloud/app/controller/detail.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2023-05-29 12:33:42
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
      ctx.helper.success({ ctx, res: '详情更新成功' });
      return;
    }
    await this.service.detail.create(body);
    ctx.helper.success({ ctx, res: '新增详情完成' });
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.detail.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: '编辑详情成功' });
  }

  // 获取所有网站列表
  async info() {
    const { ctx, service } = this;
    // 组装参数
    const query = ctx.request.query;
    // 调用 Service 进行业务处理
    const res = await service.detail.info(query);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.advert.destroy(body._id);
    ctx.helper.success({ ctx, res: '删除网站成功' });
  }
}

module.exports = DetailController;
