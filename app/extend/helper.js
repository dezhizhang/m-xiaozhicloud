/* eslint-disable jsdoc/require-returns-description */
/* eslint-disable jsdoc/check-tag-names */
/* eslint-disable jsdoc/require-param-description */
/*
 * :file description: 帮助模块
 * :name: /m-xiaozhicloud/app/extend/helper.js
 * :author: 张德志
 * :copyright: (c) 2023, Xiaozhi
 * :date created: 2023-03-25 11:14:09
 * :last editor: 张德志
 * :date last edited: 2023-09-29 18:36:26
 */
// 处理成功响应
exports.success = (ctx, msg = '请求成功', data = {}) => {
  ctx.body = {
    msg,
    code: 200,
    ...data,
    success: true,
  };

  ctx.status = 200;
};
// 处理成功响应
exports.fail = (ctx, msg = '请求失败', code = 400, data = {}) => {
  ctx.body = {
    code,
    success: false,
    ...data,
    msg,
  };
  ctx.status = 200;
};

/**
 * @description: 处理分页
 * @param {*} pageIndex
 * @param {*} pageSize
 * @return {*}
 */
exports.skip = (pageIndex, pageSize) => {
  const skip = (Number(pageIndex) - 1) * Number(pageSize || 10);
  return skip;
};

/**
 * @description: 邮箱验证
 * @param {*} email
 * @return {*}
 */
exports.verifyEmail = email => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  return reg.test(email);
};

/**
 * @description: 生成token
 * @param {*} that
 * @param {*} data
 * @return {*}
 */
exports.genToken = (that, data) => {
  const { app } = that;
  const token = app.jwt.sign(data, app.config.jwt.secret);
  return token;
};

