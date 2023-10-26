/*
 * :file description: 人工智能产品
 * :name: /m-xiaozhicloud/app/service/digit.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-25 20:33:37
 * :last editor: 张德志
 * :date last edited: 2023-10-27 06:20:22
 */
const Service = require('egg').Service;

class DigitService extends Service {
  async create(payload) {
    const { ctx } = this;
    return ctx.model.Digit.create(payload);
  }


  async destroy(_id) {
    const { ctx } = this;
    const aigc = await ctx.model.Digit.findById(_id);

    if (!aigc) {
      ctx.throw(400, '删除的数据不存在');
    }
    return ctx.model.Digit.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const metaverse = await ctx.model.Digit.findById(_id);
    if (!metaverse) {
      ctx.throw(400, '更新的数据不存在');
    }
    return ctx.model.Digit.findByIdAndUpdate(_id, payload);
  }

  async info(_id) {
    const { ctx } = this;
    const result = await ctx.model.Digit.findById(_id);
    if (!result) {
      ctx.throw(400, '获取数据不存在');
    }
    return result;
  }

  // 获取列表数据
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = filter.title ? new RegExp(filter.title) : '';
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const totel = await this.ctx.model.Digit.find({
      ...filter,
      title: { $regex: regex },
    }).count().exec();
    const result = await this.ctx.model.Digit.find({
      ...filter,
      title: { $regex: regex },
    })
      .skip(skip)
      .limit(Number(pageSize))
      .sort({ add_time: -1 })
      .exec();

    return { total: totel, data: result };
  }

}

module.exports = DigitService;
