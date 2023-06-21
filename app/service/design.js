/*
 * :file description:
 * :name: /m-xiaozhicloud/app/service/design.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-25 17:15:08
 * :last editor: 张德志
 * :date last edited: 2023-06-21 21:04:37
 */
const Service = require('egg').Service;

class WebsiteService extends Service {
  async create(payload) {
    const { ctx } = this;
    return ctx.model.Design.create(payload);
  }


  async destroy(_id) {
    const { ctx } = this;
    const website = await ctx.model.Design.findById(_id);

    if (!website) {
      ctx.throw(400, '删除的数据不存在');
    }
    return ctx.model.Design.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const design = await ctx.model.Design.findById(_id);
    if (!design) {
      ctx.throw(400, '更新的数据不存在');
    }
    return ctx.model.Design.findByIdAndUpdate(_id, payload);
  }

  async info(_id) {
    const { ctx } = this;
    const result = await ctx.model.Design.findById(_id);
    if (!result) {
      ctx.throw(400, '获取数据不存在');
    }
    return result;
  }

  // 获取列表数据
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = new RegExp(filter.title);
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const totel = await this.ctx.model.Design.find({
      ...filter,
      title: { $regex: regex },
    }).count().exec();
    const result = await this.ctx.model.Design.find({
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
