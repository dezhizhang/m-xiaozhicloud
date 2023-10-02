/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:23:29
 * :last editor: 张德志
 * :date last edited: 2023-10-02 14:47:08
 */
'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
  // 获取管理员列表
  async list() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const total = await ctx.model.Manager.count();
    const list = await ctx.model.Manager.find(body);
    ctx.body = {
      code: 200,
      msg: '获取管理员成功',
      data: list,
      total,
      success: true,
    };
  }

  // 增加用户
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const result = await this.service.manager.create(body);
    if (!result) {
      await ctx.helper.fail(ctx, '当前会员已存在');
      return;
    }
    await ctx.helper.success(ctx, '增加会员成功');
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const { _id } = body;
    await this.service.manager.update(_id, body);
    await ctx.helper.success(ctx, '修改会员成功');
  }

  // 删除用户
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const result = await ctx.model.Manager.deleteOne({ _id: body.id });

    if (result.length <= 0) {
      ctx.status = 400;
      ctx.body = {
        code: 400,
        msg: '删除用户失败',
        success: false,
      };
      return;
    }
    ctx.body = {
      code: 200,
      msg: '删除成功',
      success: true,
    };
  }

  // 管理员登录
  async login() {
    const body = this.ctx.request.body;
    const { email, password } = body;
    const result = await this.ctx.model.Manager.find({ email, password });
    if (result.length <= 0) {
      this.ctx.body = {
        status: 404,
        msg: '用户名或密码不正确',
        success: false,
      };
      return;
    }
    this.ctx.body = {
      status: 200,
      msg: '查询用户成功',
      data: result,
      success: true,
    };
  }

  // 用户登录接口
  async account() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { email, password } = body;
    const member = await ctx.service.manager.getBymember(email);
    if (!member?.length) {
      ctx.helper.fail(ctx, '当前用户不存在请注册');
      return;
    }
    // 进行用户验证
    const result = await ctx.service.manager.account({ email, password });
    if (!result.length) {
      ctx.helper.fail(ctx, '用户名或密码不正确');
      return;
    }

    // 生成token并将token写入到redis中
    const { _id, username, status, gender } = result[0];
    const data = { userId: _id, username, status, gender };
    const token = await ctx.helper.genToken(this, data);
    // 将token写入到redis中
    // this.app.redis.set(email, token);
    await ctx.helper.success(ctx, '登录成功', { token, ...data });
  }

  async outLogin() {
    const { ctx } = this;
    this.helper.success({ ctx, msg: '退出登录成功' });
  }

  // 管理员登录
  async current() {
    const ctx = this.ctx;
    const query = ctx.request.query;
    const { user_id } = query || {};

    // 查询当前用户是否存在
    const result = await ctx.service.manager.getByIdUser(user_id);
    if (!result.length) {
      await ctx.helper.fail(ctx, '用户验证失败', 400, { is_auth: false });
      return;
    }
    // 用户登录验证成功
    await ctx.helper.success(ctx, '用户验证成功', { is_auth: true });
  }

  // 注册会员
  async register() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { email, username } = body || {};

    const isverify = ctx.helper.verifyEmail(email);
    if (!isverify) {
      ctx.helper.fail(ctx, '邮箱不合法');
      return;
    }
    // 1 从redis拿验证码做验证码的验证

    // 2 写入当前用户
    const result = await ctx.service.manager.create(body);

    if (!result) {
      ctx.helper.fail(ctx, `当${email}已存在`);
      return;
    }

    const { _id: userId, is_admin, status, gender } = result;

    // 生成后将用户信息返回回去
    ctx.helper.success(ctx, '创建用户成功', { is_admin, status, userId, gender, email, username });
  }
}

module.exports = AdminController;
