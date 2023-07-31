/*
 * :file description:
 * :name: /m-xiaozhicloud/app/router.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2023-07-31 19:56:31
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
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
  router.post(`${APIV1}/aigc/news-information/list`, controller.aigc.information.list);
  router.get(`${APIV1}/aigc/news-information/info`, controller.aigc.information.info);
  router.post(`${APIV1}/aigc/news-information/add`, controller.aigc.information.add);
  router.put(`${APIV1}/aigc/news-information/edit`, controller.aigc.information.edit);
  router.delete(`${APIV1}/aigc/news-information/delete`, controller.aigc.information.delete);


  // 人工智能产品
  router.post(`${APIV1}/aigc/intelligent-products/list`, controller.aigc.intelligent.list);
  router.get(`${APIV1}/aigc/intelligent-products/info`, controller.aigc.intelligent.info);
  router.post(`${APIV1}/aigc/intelligent-products/add`, controller.aigc.intelligent.add);
  router.put(`${APIV1}/aigc/intelligent-products/edit`, controller.aigc.intelligent.edit);
  router.delete(`${APIV1}/aigc/intelligent-products/delete`, controller.aigc.intelligent.delete);


  // 广告管理
  router.post(`${APIV1}/advert/list`, controller.advert.list);
  router.post(`${APIV1}/advert/add`, controller.advert.add);
  router.put(`${APIV1}/advert/edit`, controller.advert.edit);
  router.delete(`${APIV1}/advert/delete`, controller.advert.delete);

  // 详情管理
  router.get(`${APIV1}/detail/info`, controller.detail.info);
  router.post(`${APIV1}/detail/add`, controller.detail.add);
  router.post(`${APIV1}/detail/delete`, controller.detail.delete);

  // 网站管理
  router.post(`${APIV1}/website/list`, controller.website.list);
  router.post(`${APIV1}/website/add`, controller.website.add);
  router.get(`${APIV1}/website/info`, controller.website.info);
  router.put(`${APIV1}/website/edit`, controller.website.edit);
  router.delete(`${APIV1}/website/delete`, controller.website.delete);

  //  办公软件
  router.post(`${APIV1}/office/list`, controller.office.list);
  router.post(`${APIV1}/office/add`, controller.office.add);
  router.get(`${APIV1}/office/info`, controller.office.info);
  router.put(`${APIV1}/office/edit`, controller.office.edit);
  router.delete(`${APIV1}/office/delete`, controller.office.delete);

  // 设计资源
  router.post(`${APIV1}/design/list`, controller.design.list);
  router.post(`${APIV1}/design/add`, controller.design.add);
  router.get(`${APIV1}/design/info`, controller.design.info);
  router.put(`${APIV1}/design/edit`, controller.design.edit);
  router.delete(`${APIV1}/design/delete`, controller.design.delete);

  // 软件工具
  router.post(`${APIV1}/friendly-link/list`, controller.friendlyLink.list);
  router.post(`${APIV1}/friendly-link/add`, controller.friendlyLink.add);
  router.put(`${APIV1}/friendly-link/edit`, controller.friendlyLink.edit);
  router.delete(`${APIV1}/friendly-link/delete`, controller.friendlyLink.delete);

  // 用户注册
  // router.post(`${APIV1}/user/register`, controller.member.register);
};
