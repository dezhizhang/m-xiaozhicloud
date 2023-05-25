/*
 * :file description: 帮助模块
 * :name: /m-xiaozhicloud/app/extend/helper.js
 * :author: 张德志
 * :copyright: (c) 2023, Xiaozhi
 * :date created: 2023-03-25 11:14:09
 * :last editor: 张德志
 * :date last edited: 2023-05-25 12:25:19
 */
// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    stat: 1,
    result: res,
    msg,
    success: true,
    currentAuthority: 'admin',
  };
  ctx.status = 200;
};
// 处理成功响应
exports.fail = ({ ctx, res = null, code = 400, msg = '请求失败' }) => {
  ctx.body = {
    stat: 0,
    code,
    success: false,
    result: res,
    msg,
  };
  ctx.status = 200;
};


exports.skip = (pageIndex, pageSize) => {
  const skip = (Number(pageIndex) - 1) * Number(pageSize || 10);
  return skip;
};
