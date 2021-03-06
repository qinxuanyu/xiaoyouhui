export default [{
    path: '/',
    name: 'home',
    component: () =>
      import ('@/views/index/index')
  },
  {
    //招商活动
    path: '/hd',
    name: 'hd',
    component: () =>
      import ('@/views/index/activity')
  },
  {
    //党建
    path: '/party-building',
    name: 'party-building',
    component: () =>
      import ('@/views/index/party-building')
  },
  {
    //党建更多
    path: '/party-building-more/:id',
    name: 'party-building-more',
    component: () =>
      import ('@/views/Details-page/party-building-more')
  },
  {
    //招引新闻-详情
    path: '/Attracting-news/:id',
    name: 'Attracting-news',
    component: () =>
      import ('@/views/Details-page/Attracting-news')
  },
  {
    //招引活动-更多
    path: '/Attracting-activities/:id',
    name: 'Attracting-activities',
    component: () =>
      import ('@/views/Details-page/Attracting-activities')
  },
  {
    //招引服务-更多
    path: '/zyfu-zs/:type',
    name: 'zyfu-zs',
    component: () =>
      import ('@/views/Details-page/Attracting-service')
  },
  {
    //招引服务-更多-详情
    path: '/zyfu-index/:id',
    name: 'zyfu-index',
    component: () =>
      import ('@/views/Attracting-service-details/index')
  },
   

]
