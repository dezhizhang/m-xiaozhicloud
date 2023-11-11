/*
 * :file description:
 * :name: /m-xiaozhicloud/app/router.js
 * :author: 张德志
 * :copyright: (c) 2022, Xiaozhi
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2023-11-11 17:28:18
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
  router.get(`${APIV1}/user/current`, controller.manager.current);
  router.post(`${APIV1}/login/out-login`, controller.manager.outLogin);


  // 用户列表
  router.post(`${APIV1}/manager/list`, controller.manager.list);
  router.post(`${APIV1}/manager/add`, controller.manager.add);
  router.put(`${APIV1}/manager/edit`, controller.manager.edit);
  router.delete(`${APIV1}/manager/delete`, controller.manager.delete);

  // 人工智能产品
  router.post(`${APIV1}/metaverse/list`, controller.metaverse.list);
  router.get(`${APIV1}/metaverse/info`, controller.metaverse.info);
  router.post(`${APIV1}/metaverse/add`, controller.metaverse.add);
  router.put(`${APIV1}/metaverse/edit`, controller.metaverse.edit);
  router.delete(`${APIV1}/metaverse/delete`, controller.metaverse.delete);


  // 会员管理
  router.post(`${APIV1}/member/register`, controller.manager.register);


  // 开源管理
  router.post(`${APIV1}/open-source/list`, controller.opensource.list);
  router.post(`${APIV1}/open-source/add`, controller.opensource.add);
  router.delete(`${APIV1}/open-source/delete`, controller.opensource.delete);
  router.put(`${APIV1}/open-source/edit`, controller.opensource.edit);
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

  router.post(`${APIV1}/digit/list`, controller.digit.list);
  router.post(`${APIV1}/digit/add`, controller.digit.add);
  router.put(`${APIV1}/digit/edit`, controller.digit.edit);
  router.delete(`${APIV1}/digit/delete`, controller.digit.delete);

  router.post(`${APIV1}/painting/list`, controller.painting.list);
  router.post(`${APIV1}/painting/add`, controller.painting.add);
  router.put(`${APIV1}/painting/edit`, controller.painting.edit);
  router.delete(`${APIV1}/painting/delete`, controller.painting.delete);

  // 详情管理
  router.get(`${APIV1}/detail/info`, controller.detail.info);
  router.post(`${APIV1}/detail/add`, controller.detail.add);
  router.post(`${APIV1}/detail/delete`, controller.detail.delete);


  // 软件工具
  router.post(`${APIV1}/friendly-link/list`, controller.friendlyLink.list);
  router.post(`${APIV1}/friendly-link/add`, controller.friendlyLink.add);
  router.put(`${APIV1}/friendly-link/edit`, controller.friendlyLink.edit);
  router.delete(`${APIV1}/friendly-link/delete`, controller.friendlyLink.delete);

  // 用户注册
  router.post(`${APIV1}/member/register`, controller.manager.register);
};
