/*
 * :file description:
 * :name: /m-xiaozhicloud/app/router.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2023-05-26 15:47:54
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 公共url
  const APIV1 = '/api/v1';

  // router.get('/', controller.home.index);

  // 用户登录
  router.post(`${APIV1}/manager/login`, controller.manager.login);

  router.post(`${APIV1}/login/account`, controller.manager.account);
  router.post(`${APIV1}/outLogin`, controller.manager.outLogin);

  router.get(`${APIV1}/currentUser`, controller.manager.currentUser);

  // 用户列表
  router.post(`${APIV1}/manager/list`, controller.manager.list);
  router.post(`${APIV1}/manager/add`, controller.manager.add);
  router.put(`${APIV1}/manager/edit`, controller.manager.edit);
  router.delete(`${APIV1}/manager/delete`, controller.manager.delete);

  // 会员管理
  router.post(`${APIV1}/member/register`, controller.manager.register);

  // 人工智能
  router.post(`${APIV1}/aigc/list`, controller.aigc.list);

  // 广告管理
  router.post(`${APIV1}/advert/list`, controller.advert.list);
  router.post(`${APIV1}/advert/add`, controller.advert.add);
  router.put(`${APIV1}/advert/edit`, controller.advert.edit);
  router.delete(`${APIV1}/advert/delete`, controller.advert.delete);

  // 网站管理
  router.post(`${APIV1}/website/list`, controller.website.list);
  router.post(`${APIV1}/website/add`, controller.website.add);
  router.put(`${APIV1}/website/edit`, controller.website.edit);
  router.delete(`${APIV1}/website/delete`, controller.website.delete);

  //  办公软件
  router.post(`${APIV1}/office/list`, controller.office.list);
  router.post(`${APIV1}/office/add`, controller.office.add);
  router.put(`${APIV1}/office/edit`, controller.office.edit);
  router.delete(`${APIV1}/office/delete`, controller.office.delete);

  // 设计资源
  router.post(`${APIV1}/design/list`, controller.design.list);
  router.post(`${APIV1}/design/add`, controller.design.add);
  router.put(`${APIV1}/design/edit`, controller.design.edit);
  router.delete(`${APIV1}/design/delete`, controller.design.delete);

  // 软件工具
  router.post(`${APIV1}/tool/list`, controller.tool.list);
  router.post(`${APIV1}/tool/add`, controller.tool.add);
  router.put(`${APIV1}/tool/edit`, controller.tool.edit);
  router.delete(`${APIV1}/tool/delete`, controller.tool.delete);

  // 标签管理
};
