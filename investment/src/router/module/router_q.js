export default [
    {
        path: '/news',
        name: 'news',
        component: () => import( '@/views/news/index.vue')
    },
    {
        path: '/activity',
        name: 'activity',
        component: () => import('@/views/activity/index.vue')
    },
    {
        path: '/serve',
        name: 'serve',
        component: () => import( '@/views/serve/index.vue')
    },
    {
        path: '/serve_info',     
        name: 'serveInfo',
        component: () => import( '@/views/serve/info.vue')
    },
    {
        path: '/garden/:id',  //园区详情
        name: 'garden',
        component: () => import( '@/views/serve/garden.vue')
    },
    {
        path: '/about',  //联系我们
        name: 'about',
        component: () => import( '@/views/index/about.vue')
    },
    {
        path: '/dynamic',  //三圈动态
        name: 'dynamic',
        component: () => import( '@/views/dynamic/index.vue')
    },
    {
        path: '/Attracting-dynamic/:id',  //三圈动态详情
        name: 'attractingD',
        component: () => import( '@/views/Details-page/Attracting-dynamic.vue')
    },
    {
        path: '/Attracting-party/:id',  //党建详情
        name: 'attractingD',
        component: () => import( '@/views/Details-page/Attracting-party.vue')
    },
    //招商峰会列表
    {
        path: '/summit',  
        name: 'summit',
        component: () => import( '@/views/news/summit.vue')
    },
    //服务资讯详情
    {
        path: '/info-details/:id',  
        name: 'infoDetails',
        component: () => import( '@/views/serve/info-details.vue')
    },
]