/* eslint-disable jsdoc/require-returns-description */
/* eslint-disable jsdoc/check-tag-names */
/* eslint-disable jsdoc/require-param-description */
/*
 * :file description:
 * :name: /m-xiaozhicloud/app/utils/utils.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-23 10:00:15
 * :last editor: 张德志
 * :date last edited: 2023-09-28 16:53:11
 */

/**
* @description: 邮箱验证
* @param {*} email
* @return {*}
 */
function verifyEmail(email) {
  const reg = /^[a-zA-Z0-9]+[.+-]+[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/g;
  return reg.test(email);
}

module.exports = {
  verifyEmail,
};
