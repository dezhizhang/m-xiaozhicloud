/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:23:29
 * :last editor: 张德志
 * :date last edited: 2023-09-29 16:14:45
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
      ctx.helper.fail({ ctx, msg: '当前会员已存在' });
      return;
    }
    ctx.helper.success({ ctx, msg: '增加会员成功' });
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.manager.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: '修改会员成功' });
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
  async account() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { email, password } = body;
    console.log({ email, password });
    const member = await ctx.service.manager.getBymember(email);
    if (!member?.length) {
      ctx.helper.fail({ ctx, msg: '当前用户不存在请注册' });
      return;
    }
    // 进行用户验证
    const result = await ctx.service.manager.account({ email, password });
    if (!result.length) {
      ctx.helper.fail({ ctx, msg: '用户名或密码不正确' });
      return;
    }

    // 生成token并将token写入到redis中
    const { _id, username, status, gender } = result[0];
    const data = { userId: _id, username, status, gender };
    const token = await ctx.helper.genToken(this, data);
    // 将token写入到redis中
    this.app.redis.set(email, token);

    await ctx.helper.success({ ctx, msg: '登录成功', token, ...data });
  }

  async outLogin() {
    const { ctx } = this;
    this.helper.success({ ctx, msg: '退出登录成功' });
  }

  // 管理员登录
  async currentUser() {
    const ctx = this.ctx;
    ctx.body = {
      status: 200,
      success: true,
      data: {
        name: 'Serati Ma',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          {
            key: '0',
            label: '很有想法的',
          },
          {
            key: '1',
            label: '专注设计',
          },
          {
            key: '2',
            label: '辣~',
          },
          {
            key: '3',
            label: '大长腿',
          },
          {
            key: '4',
            label: '川妹子',
          },
          {
            key: '5',
            label: '海纳百川',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',

        geographic: {
          province: {
            label: '浙江省',
            key: '330000',
          },
          city: {
            label: '杭州市',
            key: '330100',
          },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      },
    };
  }

  // 注册会员
  async register() {
    const { ctx } = this;
    const body = ctx.request.body;
    const { email, username } = body || {};

    const isverify = ctx.helper.verifyEmail(email);
    if (!isverify) {
      ctx.helper.fail({ ctx, msg: '邮箱不合法' });
      return;
    }
    // 1 从redis拿验证码做验证码的验证

    // 2 写入当前用户
    const result = await ctx.service.manager.create(body);

    if (!result) {
      ctx.helper.fail({ ctx, msg: `当${email}已存在` });
      return;
    }

    const { _id: userId, is_admin, status, gender } = result;

    // 生成后将用户信息返回回去
    ctx.helper.success({ ctx, res: { is_admin, status, userId, gender, email, username } });
  }
}

module.exports = AdminController;
