/*
 * :file description:
 * :name: /m-xiaozhicloud/app/service/detail.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-26 20:35:32
 * :last editor: 张德志
 * :date last edited: 2023-05-29 12:30:44
 */
/*
 * :file description: 广告服务
 * :name: /m-xiaozhicloud/app/service/advert.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-25 20:33:37
 * :last editor: 张德志
 * :date last edited: 2023-05-25 12:30:12
 */
const Service = require('egg').Service;

class AdvertService extends Service {
  async create(payload) {
    const { ctx } = this;
    return ctx.model.Detail.create(payload);
  }


  async destroy(_id) {
    const { ctx } = this;
    const detail = await ctx.model.Detail.findById(_id);

    if (!detail) {
      ctx.throw(400, '删除的数据不存在');
    }
    return ctx.model.Detail.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    console.log(_id,payload);
    const detail = await ctx.model.Detail.findById(_id);
    if (!detail) {
      ctx.throw(400, '更新的数据不存在');
    }
    return ctx.model.Detail.findByIdAndUpdate(_id, payload);
  }

  // 获取列表数据
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = new RegExp(filter.title);
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const totel = await this.ctx.model.Detail.find({
      ...filter,
      title: { $regex: regex },
    }).count().exec();
    const result = await this.ctx.model.Detail.find({
      ...filter,
      title: { $regex: regex },
    })
      .skip(skip)
      .limit(Number(pageSize))
      .sort({ add_time: -1 })
      .exec();

    return { total: totel, data: result };
  }

  // 获取列表数据
  async info(payload) {
    const { detailId } = payload;
    const result = await this.ctx.model.Detail.find({ detailId });
    return { data: result[0] };
  }

}

module.exports = AdvertService;
