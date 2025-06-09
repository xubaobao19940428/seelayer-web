export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        component: '@/pages/login',
        // 不需要写 layout，直接就是一个独立页面
    },
    {
        path: '',
        component: '@/layout/index', // layout 包裹的部分
        routes: [
            {
                path: 'home',
                component: '@/pages/index',
                meta: { title: '首页' },
            },
            {
                path: 'feature1',
                component: '@/pages/feature1',
                meta: { title: '功能1' },
            },
            {
                path: 'feature2',
                component: '@/pages/feature2',
                meta: { title: '功能2' },
            },
        ],
    },
];
