/*
 * :file description:
 * :name: /m-xiaozhicloud/app/service/office.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-25 16:40:55
 * :last editor: 张德志
 * :date last edited: 2023-05-25 12:30:23
 */
const Service = require('egg').Service;

class WebsiteService extends Service {
  async create(payload) {
    const { ctx } = this;
    return ctx.model.Office.create(payload);
  }


  async destroy(_id) {
    const { ctx } = this;
    const website = await ctx.model.Office.findById(_id);

    if (!website) {
      ctx.throw(400, '删除的数据不存在');
    }
    return ctx.model.Office.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const office = await ctx.model.Office.findById(_id);
    if (!office) {
      ctx.throw(400, '更新的数据不存在');
    }
    return ctx.model.Office.findByIdAndUpdate(_id, payload);
  }

  // 获取列表数据
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = new RegExp(filter.title);
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const totel = await this.ctx.model.Office.find({
      ...filter,
      title: { $regex: regex },
    }).count().exec();
    const result = await this.ctx.model.Office.find({
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
