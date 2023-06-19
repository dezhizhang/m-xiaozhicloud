
/*
 * :file description: 人工智能产品
 * :name: /m-xiaozhicloud/app/service/intelligent.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-25 20:33:37
 * :last editor: 张德志
 * :date last edited: 2023-06-19 19:30:00
 */
const Service = require('egg').Service;

class AigcService extends Service {
  async create(payload) {
    const { ctx } = this;
    return ctx.model.Intelligent.create(payload);
  }


  async destroy(_id) {
    const { ctx } = this;
    const aigc = await ctx.model.Intelligent.findById(_id);

    if (!aigc) {
      ctx.throw(400, '删除的数据不存在');
    }
    return ctx.model.Intelligent.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const intelligent = await ctx.model.Intelligent.findById(_id);
    if (!intelligent) {
      ctx.throw(400, '更新的数据不存在');
    }
    return ctx.model.Intelligent.findByIdAndUpdate(_id, payload);
  }

  // 获取列表数据
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = filter.title ? new RegExp(filter.title) : '';
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const totel = await this.ctx.model.Intelligent.find({
      ...filter,
      title: { $regex: regex },
    }).count().exec();
    const result = await this.ctx.model.Intelligent.find({
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

module.exports = AigcService;
