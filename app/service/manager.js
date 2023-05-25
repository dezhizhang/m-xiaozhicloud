const Service = require('egg').Service;

class WebsiteService extends Service {
  async create(payload) {
    const { ctx } = this;
    const result = await ctx.model.Manager.find({ mobile: payload.mobile });
    if (result.length > 0) return false;
    return ctx.model.Manager.create(payload);
  }

  async account(payload) {
    const { ctx } = this;
    console.log(payload);
    return await ctx.model.Manager.find(payload);
  }


  async destroy(_id) {
    const { ctx } = this;
    const website = await ctx.model.Manager.findById(_id);

    if (!website) {
      ctx.throw(400, '删除的数据不存在');
    }
    return ctx.model.Manager.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const d = new Date();
    const manager = await ctx.model.Manager.findById(_id);
    if (!manager) {
      ctx.throw(400, '更新的数据不存在');
    }
    payload.update_time = d.getTime();
    return ctx.model.Manager.findByIdAndUpdate(_id, payload);
  }

  // 获取列表数据
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = new RegExp(filter.title);
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const totel = await this.ctx.model.Manager.find({
      ...filter,
      title: { $regex: regex },
    }).count().exec();
    const result = await this.ctx.model.Manager.find({
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

module.exports = WebsiteService;
